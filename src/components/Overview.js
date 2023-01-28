import React from "react";

function App() {
    return (
        
        <section class="bg-[#D9D9D9]">
            <div class="bg-[#88A1F6] py-2 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
                <div class ="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <p class="font-light text-[#3E3131] sm:text-xl">OVERVIEW</p>          
                    <h2 class="py-5 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#3E3131] lg:py-2">Welcome, William!</h2>
                    <a href="#" class="mt-3 mb-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#3E3131] border border-[#3E3131] rounded-lg hover:bg-[#c84d4d] hover:text-[#D9D9D9]">
                Log Out
            </a> 
            <a href="#" class="mx-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#3E3131] border border-[#3E3131] rounded-lg hover:bg-[#D9D9D9] hover:text-[#3E3131]">
                View Receipts
            </a> 
                </div>
                <div class="grid gap-4 lg:grid-cols-3">
                    <article class="p-6 bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex justify-between items-center mb-5 text-[#3E3131]">
                            <h3 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">My budget</a></h3>
                            <h2 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">$450.00</a></h2>
                        </div>
                    </article>
                    <article class="p-6 bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex justify-between items-center mb-5 text-[#3E3131]">
                            <h3 class="mb-2 text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">Total income</a></h3>
                            <h2 class="mb-2 text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">$435,500</a></h2>
                        </div>
                    </article>
                    <article class="p-6 bg-[#D9D9D9] rounded-lg border border-[#D9D9D9] shadow-md">
                        <div class="flex justify-between items-center mb-5 text-[#3E3131]">
                            <h3 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">My spendings</a></h3>
                            <h2 class="text-2xl font-bold tracking-tight text-[#3E3131]"><a href="#">-$324.34</a></h2>
                        </div>
                    </article>

                </div>
                </div>  

  
<div class="px-4 mx-auto max-w-screen-xl lg:px-6 rounded-lg ">
    <table class="w-full text-sm text-left text-[#3E3131]">
        <caption class="p-5 text-xl font-bold text-left text-[#3E3131] bg-[#D9D9D9]">
            My Purchases
            <p class="mt-1 text-sm font-normal text-[#3E3131]">See all your most recently summarized receipts.</p>
        </caption>
        <thead class="text-xs text-[#3E3131] uppercase bg-[#cbcbcb]">
            <tr>
                <th scope="col" class="px-6 py-3">
                    PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                    CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                    PRICE
                </th>


            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#D9D9D9]">
                <th scope="row" class="px-6 py-4 font-medium text-[#3E3131] whitespace-nowrap">
                    Netflix Subscription
                </th>
                <td class="px-6 py-4">
                    Entertainment
                </td>
                <td class="px-6 py-4">
                    $17.37
                </td>

            </tr>
            <tr class="bg-[#D9D9D9]">
                <th scope="row" class="px-6 py-4 font-medium text-[#3E3131] whitespace-nowrap">
                    Chatime Bubble Tea
                </th>
                <td class="px-6 py-4">
                    Food
                </td>
                <td class="px-6 py-4">
                    $7.37
                </td>

            </tr>

        </tbody>
    </table>
</div>
              
        </section>


    );
  }
  
  export default App;