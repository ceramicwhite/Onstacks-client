FROM    --platform=${TARGETPLATFORM} node:14.20.1-alpine AS deps

WORKDIR /app

COPY    package.json ./package.json

RUN     npm install

#####################################################################
FROM    --platform=${TARGETPLATFORM} node:14.20.1-alpine AS builder

WORKDIR /app

COPY    . .

COPY    --from=deps /app/node_modules ./node_modules

COPY   .env.example ./.env

RUN     npm run build


#####################################################################
FROM    --platform=${TARGETPLATFORM} node:14.20.1-alpine AS runner

ENV     NODE_ENV=production

WORKDIR /app

COPY    --from=builder --chown=1000:1000 /app/build ./build
COPY    --from=deps --chown=1000:1000 /app/node_modules ./node_modules

COPY    public entrypoint.sh README.md LICENSE .env.example ./

RUN     npm install -g serve && \
        chmod +x entrypoint.sh

ENV     MINING_MONITOR_GRAPHQL=https://mining-importer.up.railway.app/v1/graphql \
        STACKS_BLOCKCHAIN_API_URL=https://stacks-node-api.mainnet.stacks.co \
        IPFS_GATEWAY_URL=https://ipfs.fleek.co/ipfs/ \
        MEMPOOL_SPACE_URL=https://mempool.space \
        PORT=3000

EXPOSE  $PORT

USER    1000

ENTRYPOINT  ["./entrypoint.sh"]
