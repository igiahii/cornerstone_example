using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace cornerstone_example2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Tumbnail()
        {
            return View();
        }
        public ActionResult Dicom()
        {
            //string baseUrl = AppDomain.CurrentDomain.BaseDirectory;
            string baseUrl = string.Format("{0}://{1}{2}", Request.Url.Scheme, Request.Url.Authority, Url.Content("~"));
            string path = Path.Combine("Content", "Img", "dicom", "sample1.DCM").Replace("\\", "/");
            //if (System.IO.File.Exists(path))
            //{
            //}
                ViewBag.BaseUrl = baseUrl;
                ViewBag.Path = path;
            return View();
        }
    }
}