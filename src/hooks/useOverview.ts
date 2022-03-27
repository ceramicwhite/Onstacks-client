import { useEffect, useState } from "react";
import { instance as axios } from "../axios/axios";
import { getOverviewData } from "../axios/requests";
import differenceInMinutes from "date-fns/differenceInMinutes";
import { numFormatter } from "../utils/helper";
import { getRewardDistribution, getTokenPrice } from "../axios/requests";
import { useQuery } from "@apollo/client";
import { getBlocksList } from "../graphql/query/block";
export interface OverviewProps {
  active_miners?: number;
  avg_tx_fees_per_block?: number;
  btc_block_height?: string;
  btc_hash_rate?: string;
  last_tx_fees?: number;
  next_stx_halving?: number;
  reward_payout_interval?: number;
  stx_block_height?: number;
  total_sats_committed?: number;
  btc_total?: number;
}

export interface TokenPriceProps {
  BTC: string;
  STX: string;
}

export interface SatsCommittedProps {
  total_sats_committed: number[];
  block_number: number[];
}

export interface TotalBurnedMinerFees {
  miner_list: {
    burn_fee: string;
    leader_key_address: string;
    btc_address: string;
  }[];
  block_number: string;
}

export interface Blocks {
  block_number: number;
  mined_at: number;
  sats_spent: string;
  address: string;
  winner_address: string;
  block_status?: any;
}

export const useOverview = () => {
  const [overviewData, setOverviewData] = useState<OverviewProps>({
    active_miners: 0,
    avg_tx_fees_per_block: 0,
    btc_block_height: "",
    btc_hash_rate: "",
    last_tx_fees: 0,
    next_stx_halving: 0,
    reward_payout_interval: 0,
    stx_block_height: 0,
    total_sats_committed: 0,
    btc_total: 0,
  });
  const [tokens, setTokens] = useState<TokenPriceProps>({
    BTC: "0",
    STX: "0",
  });

  const [failure, setFailure] = useState(false);

  const [totalWinners, setTotalWinners] = useState<any[]>([]);
  const [winnersAddresses, setwinnersAddresses] = useState<any[]>([]);

  const [blocks, setBlocks] = useState<Blocks[]>([]);
  const { data } = useQuery(getBlocksList, {
    variables: { limit: 100, offset: 0 },
  });

  useEffect(() => {
    try {
      axios.get(getOverviewData).then((data: any) => {
        if (data) {
          setOverviewData(data);
        }
      });
      axios.get(getTokenPrice).then((data: any) => {
        if (data) {
          setTokens({
            BTC: numberWithCommas(
              data.find((token: any) => token.token_name === "BTC").token_price
            ),
            STX: numberWithCommas(
              data.find((token: any) => token.token_name === "STX").token_price
            ),
          });
        }
      });
      axios.get(getRewardDistribution).then((data: any) => {
        if (data) {
          setwinnersAddresses(
            data.map((b: any) => {
              if (b.stx_address && b.stx_address.length > 0) {
                return (
                  b.stx_address.substring(0, 4) +
                  ".." +
                  b.stx_address.substring(
                    b.stx_address.length - 4,
                    b.stx_address.length
                  )
                );
              } else {
                return "";
              }
            })
          );
          setTotalWinners(data.map((b: any) => b.actual_win));
        }
      });
    } catch (error) {
      setFailure(true);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setBlocks(
        data.block_info.map((r: any) => {
          return {
            address: r.winnerAddress,
            block_number: "#" + r.stacksBlockHeight,
            mined_at:
              differenceInMinutes(new Date(), r.timestamp * 1000) +
              (window.innerWidth > 800 ? " Mins" : "Mins"),
            sats_spent: numFormatter(+r.totalSpent.aggregate.sum.commit_value),
            winner_address:
              r.winnerAddress.substring(0, 4) +
              ".." +
              r.winnerAddress.substring(
                r.winnerAddress.length - 4,
                r.winnerAddress.length
              ),
          };
        })
      );
    }
  }, [data]);

  return {
    overviewData,
    tokens,
    blocks,
    totalWinners,
    failure,
    winnersAddresses,
  };
};

export const numberWithCommas = (x: any) => {
  return new Intl.NumberFormat("en-US").format(parseFloat(x));
};
