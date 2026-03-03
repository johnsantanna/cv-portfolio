using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CvController(CvService cvService) : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(cvService.GetProfile());
}
