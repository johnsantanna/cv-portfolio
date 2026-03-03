using System.Text.Json;
using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

if (args.Contains("--export-json"))
{
    var outputPath = args.SkipWhile(a => a != "--output").Skip(1).FirstOrDefault()
        ?? Path.Combine("..", "frontend", "public", "data", "cv.json");

    Directory.CreateDirectory(Path.GetDirectoryName(outputPath)!);

    var cv = new CvService().GetProfile();
    var json = JsonSerializer.Serialize(cv, new JsonSerializerOptions
    {
        WriteIndented = true,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    });

    File.WriteAllText(outputPath, json);
    Console.WriteLine($"JSON exportado para: {Path.GetFullPath(outputPath)}");
    return;
}

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<CvService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod());
});
var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors("ReactApp");
app.MapControllers();
app.Run();
