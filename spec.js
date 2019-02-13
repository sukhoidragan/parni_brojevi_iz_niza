/* ocekujemo da ce funkcija kojoj prosledimo niz brojeva vratiti samo parne brojeve iz niza*/

describe("Testiranje filter funkcije", () => {

    it("treba da vrati samo parne brojeve", () => {
       
       const rezultat = vratiParne([1,2,,4,5,6,7,8,44,33,333,345]);
       let nadjenNeparni = false;
       for (let i = 0; i < rezultat.length; i++) {
           if (rezultat[i] % 2 !== 0) {
               nadjenNeparni = true;
               break;
           }
       }
       expect(nadjenNeparni).toBe(false);
    })

})
