using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class ShopController : Controller
    {
        EFContext db = new EFContext();

        public ActionResult GetShops()
        {
            var model = JsonConvert.SerializeObject(db.Shops.ToList());
            return Json(model, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}