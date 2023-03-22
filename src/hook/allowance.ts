import {Address, erc20ABI, useAccount, useContract, useSigner} from "wagmi";
import {BigNumber} from "ethers";


const useAllowance = (params: {
    tokenAddress: Address,
    spenderAddress: Address
}): {
    approve: () => void
    canApprove: boolean
} => {
    const {address} = useAccount()
    const {data: signer, isSuccess: isGetSignerSuccess} = useSigner()
    const tokenSc = useContract({
        address: params.tokenAddress,
        abi: erc20ABI,
        signerOrProvider: signer,
    })

    return {
        canApprove: isGetSignerSuccess,
        approve: async () => {
            if (!isGetSignerSuccess) {
                return
            }
            const allowance = await tokenSc?.allowance(address || '0x', params.spenderAddress)
            if (allowance?.isZero()){
                await tokenSc?.approve(params.spenderAddress, BigNumber.from(`1000000000000000000000000000000000`))
            }
        }
    }
}

export {
    useAllowance
}