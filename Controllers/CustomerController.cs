using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using WebDemoTurku.Models;

namespace WebDemoTurku.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {

        [Route("moikka")]
        public string GetMoi() {
            return "Moikka";
        }
        [Route("luvut")]
        public int[] GetLuvut() {
            return new int[] {1,2,3,4,5};
        }
      

    


       public List<Customers> GetCustomers()
       { NorthwindContext context = new NorthwindContext();

        List<Customers> customers=(from c in context.Customers where 
        c.Country=="Finland" orderby c.City select c).ToList(); 

        return customers;

       } 

}    
}