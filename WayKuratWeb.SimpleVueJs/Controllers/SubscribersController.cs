using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WayKuratWeb.SimpleVueJs.Controllers
{
    public class SubscribersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}