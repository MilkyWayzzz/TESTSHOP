using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestApp.Models;

namespace TestApp.Controllers
{
    public class ProductController : Controller
    {
        EFContext db = new EFContext();
        public ActionResult GetProducts(int id)
        {
            var model = JsonConvert.SerializeObject(db.Products.Where(p=>p.ShopId == id).ToList());
            return Json(model, JsonRequestBehavior.AllowGet);
        }
        public ActionResult ProductIndex(int id)
        {
            ViewBag.shopId = id;
            return View();
        }
    }
}