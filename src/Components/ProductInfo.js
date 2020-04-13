import React, { Component } from 'react'

export default class Products extends Component {

    

    constructor() {
        super();


     let dataArray;
     let cartArray;   
     let item1 = {name: "Gamer Essential Esports",
                  imageURL : "https://www.cyberpowerpc.com/images/cs/magnus/cs-450-130_220.png",
                  price: 1085, 
                  description: "Windows 10 Home \n AMD Ryzen 5 3600 Processor \n AMD RX 580 8GB Graphics \n 16GB Vengeance 3000MHz RAM \n ASUS PRIME X570-P RGB Motherboard \n 240GB WD Green SSD + 1TB HDD Combo \nCyberPowerPC MAGNUS Full Tower Gaming Case \n" 
                  ,id:"001"};
     
     let item2 = {name: "Gamer Ultra Navi",
                  price: 1655, 
                  imageURL: "https://www.cyberpowerpc.com/images/cs/h550/cs-450-150_220.png",
                  description: "Windows 10 Home\nIntel® Core™ Processor i7-9700KF\nAMD Radeon™ RX 5700 XT 8GB Graphics\n16GB Vengeance 3000MHz RAM\nASUS Prime Z390-P WiFi ATX Motherboard\n500GB WD Blue SN550 Series PCIe NVMe + 3TB HDD Combo\nCyberPowerPC H550 Mid-Tower Gaming Case\n"  
                  ,id:"002"};
    let item3 = {name: "Gamer Ultra 2070 Super",
                  price: 1649,
                  imageURL: "https://www.cyberpowerpc.com/images/cs/syberm2/cs-192-302_220.png", 
                  description: "Windows 10 Home\nIntel® Core™ Processor i7-9700F\nGeForce® GTX 1660 Ti 6GB GDDR6\n16GB Vengeance 3000MHz RAM\nASUS Prime Z390-P WiFi ATX Motherboard\n240GB WD Green SSD + 2TB HDD Combo\n"  
                  ,id:"003"};

                  let item4 = {name: "CyberPowerPC Pro Gaming Chair 300 Series (Black/Blue Color)",
                  price: 99,
                  imageURL: "https://s.cppc.co/images/sg/apparel2016/CHAIR-101-101.png", 
                  description: "​Seductive lines and pleasing aesthetics, N Seat feature a race inspired, ergonomic design. Light weight construction with maximum stability.\n Thick padded synthetic, high quality PU leather armrests for better comfort.\n Tillable seat with lock feature.\n Adjustable height gas hydraulic unit support up to 120kg/270lbs.\n 360 Degree rotation with adjustable height gas spring.\n Mixture of synthetic PU and PVC leather for easier cleaning and maintaining, durable and breathable.\n Premium nylon twin wheels with coating to protect floors from scratches.\n "  
                  ,id:"004"};  

                  let item5 = {name: "CyberPowerPC Standard 4000 DPI with Weight System Optical Gaming Mouse",
                  price: 20,
                  imageURL : "https://s.cppc.co/images/MO/MO-131-101.png", 
                  description: "-Ambidextrous form factor\n-Gaming grade optical sensor\n-Lighting effect\n-Eight modes of DPI selection"  
                  ,id:"005"}; 
                  
                  let item6 = {name: "CYBERPOWERPC Skorpion K2 RGB Mechanical Gaming Keyboard (Blue (Clicky))",
                  price: 73,
                  imageURL : "https://s.cppc.co/images/kb/KB-161-302.png", 
                  description: "16 Million RGB Colors\nCyberPowerPC KontacT Blue Mechanical Key\nIndividually backlit keys with dynamic lighting effects\n"  
                  ,id:"006"};  

                  this.dataArray = [];
                  this.cartArray = [];
                  this.dataArray.push(item1);
                  this.dataArray.push(item2);
                  this.dataArray.push(item3);
                  this.dataArray.push(item4);
                  this.dataArray.push(item5);
                  this.dataArray.push(item6);

              console.log(dataArray);    


      }

      createProduct(pName,pPrice,pImageURL,pDescription,pId)
      {
        let item1 = {name: pName,
        imageURL : pImageURL,
        price: pPrice, 
        description: pDescription 
        ,id:pId};

        this.dataArray.push(item1);
      }

      updateProductWithID(pId,pName,pPrice,pImageURL,pDescription)
      {
          for (let i = 0; i < this.dataArray.length; i++ ) {
              if(this.dataArray[i].id === pId )
              {
                this.dataArray[i] = {name: pName,
                    imageURL : pImageURL,
                    price: pPrice, 
                    description: pDescription 
                    ,id:pId};
                    return true;
              }
          }
          return false;

      }

      deleteProductWithID(pId)
      {
        for (let i = 0; i < this.dataArray.length; i++ ) {
            if(this.dataArray[i].id === pId )
            {          
                this.dataArray.splice(i, 1);
                
                  break;
            }
        }

      }




    render() {
        
        
        

        return (
            <div className= "info">
                
            </div>
        )
    }
}

