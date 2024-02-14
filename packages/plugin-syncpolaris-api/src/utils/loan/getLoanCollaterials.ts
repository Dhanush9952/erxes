import { fetchPolaris, getLoanContract } from '../utils';

export const getLoanCollaterials = async (subdomain, params) => {
  const loanContract = await getLoanContract(subdomain, params.contractId);

  const sendData = [loanContract.number];

  const loanCollaterials = await fetchPolaris({
    subdomain,
    op: '13610279',
    data: sendData,
  }).then((response) => JSON.parse(response));

  return loanCollaterials;
};