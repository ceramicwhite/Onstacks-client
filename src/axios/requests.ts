export const getOverviewData = `getOverviewData`;
export const getSatsCommittedPerBlock = `getSatsCommittedPerBlock`;
export const getTopBurnFeePerBlock = `getTopBurnFeePerBlock`;
export const getRewardDistribution = `getRewardDistribution?latest_blocks=100`;
export const getBlocks = `getBlocks`;
export const getMinerSatsCommittedPerBlock = `getMinerSatsCommittedPerBlock`;
export const getBlockNumber = (block: string) =>
  `getBlockInfoByNumber?block_number=${block}`;
export const getMinersInfo = `getMinersInfo`;
export const getTokenPrice = `getTokenPrice`;
export const getMiningInfo = `getMiningInfo`;
