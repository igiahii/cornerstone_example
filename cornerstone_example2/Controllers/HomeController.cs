using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
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

            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var imageFolder = Path.Combine(basePath,"Content" , "Img" , "series" , "SR001");
            var Images = Directory.GetFiles(imageFolder, "*.DCM").Select(Path.GetFileName).OrderBy(name => name).ToList();
            string jsonImages = JsonConvert.SerializeObject(Images);
                ViewBag.Files = jsonImages;
                ViewBag.BaseUrl = baseUrl;
            return View();
        }
        [HttpPost]
        public ActionResult Dicom(string folderOfDicom)
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var imageFolder = Path.Combine(basePath, "Content", "Img", "series", folderOfDicom);
            if (Directory.Exists(imageFolder))
            {
                var Images = Directory.GetFiles(imageFolder, "*.DCM").Select(Path.GetFileName).OrderBy(name => name).ToList();
                string jsonImages = JsonConvert.SerializeObject(Images);
                return Json(new { successMsg = jsonImages });
            }
            else
            {
                return Json(new { errorMsg = "folder not found!" });
            }
        }

        //for creating zip file of series folder then pass the download link to view
        [HttpPost]
        public ActionResult DownloadZip(string folderOfDicom)
        {

            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            var imageFolder = Path.Combine(basePath, "Content", "Img", "series", folderOfDicom);
            if (Directory.Exists(imageFolder))
            {
                string tempZipPath = Path.Combine(basePath , "Content" , "Img", "series" , folderOfDicom + ".zip");
                //creating zip file
                ZipFile.CreateFromDirectory(imageFolder , tempZipPath);

                byte[] fileBytes = System.IO.File.ReadAllBytes(tempZipPath);
                System.IO.File.Delete(tempZipPath); // Clean up the temporary file
                return File(fileBytes, "application/zip" , folderOfDicom + ".zip");
            }
            else
            {
                return HttpNotFound("folder not found");
            }
        }

    }
}