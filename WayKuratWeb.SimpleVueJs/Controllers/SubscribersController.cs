using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace WayKuratWeb.SimpleVueJs.Controllers
{
    [Route("/api/[controller]/[action]/")]
    public class SubscribersController : Controller
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            //hard coded data for brevity
            var subs = new List<Subscriber>();
            subs.Add(new Subscriber() { Id=1,Name = "JEK",Email="jekhaxor@test.test"});
            subs.Add(new Subscriber() { Id = 1, Name = "Jikie", Email = "jekiedraws@test.test" });
            return Ok(subs);
        }
    }

    public class Subscriber
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}