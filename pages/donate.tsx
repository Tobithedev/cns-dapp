import Layout from "@/layouts/default"
import { truncateAddress } from "@/utils/truncate"
import { ReactElement, useState } from "react"


export default function Donate() {
    const [copiedText,setCopiedText] = useState("")
    return (
        <>
            <div className="bg-[linear-gradient(159.24deg,#191919_52.47%,#005741_192.07%)] h-screen">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="rounded-[10px] mx-0 py-5 px-5 text-white bg-white/30 border-2 border-white/[0.10] w-[275px] md:w-[779px] h-[fit]">
                        <p className="text-lg font-medium mb-2">Support Our Project</p>
                        <p className="mb-2">You can donate to our Polygon wallet address:</p>
                        <p className="cursor-pointer text-lg font-medium mb-2" onClick={()=> {
                            navigator.clipboard.writeText("0x403ec707705766b1D340f6fC7162a0A344647771").then(
                                () => {
                                  setCopiedText("Copied")
                                  setTimeout(()=> {
                                    setCopiedText("")
                                  }, 2000)
                                },
                              );
                        }}>{copiedText ? copiedText : truncateAddress("0x403ec707705766b1D340f6fC7162a0A344647771")}</p>
                        <p className="mb-2">Or to our bank account:</p>
                        <p className="text-lg font-medium mb-2">Bank Name: Kuda Microfinance Bank</p>
                        <p className="text-lg font-medium mb-2">Account Name: Chukwuemeka Oluwatobi Uche</p>
                        <p className="text-lg font-medium mb-2">Account Number: 2044902168</p>
                    </div>

                </div>
            </div>
        </>
    )
}

Donate.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  