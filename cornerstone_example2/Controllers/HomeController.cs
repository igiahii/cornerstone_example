﻿using System;
using System.Collections.Generic;
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
            string v =  System.Environment.Version.ToString();
            return View();
        }
    }
}