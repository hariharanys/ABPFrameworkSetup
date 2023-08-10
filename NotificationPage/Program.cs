using Volo.Abp.DependencyInjection;
using Microsoft.AspNetCore.Mvc;
using NotificationPage;
using NotificationPage.Pages;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Host.UseAutofac();
builder.Services.ReplaceConfiguration(builder.Configuration);
await builder.AddApplicationAsync<AppModule>();
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.MapGet("/notification-list", async ([FromServices] ApiService apiservice) =>
{
    var notifications = await apiservice.FetchNotificationFromApi();
    return new JsonResult(notifications);
});



await app.InitializeApplicationAsync();
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

await app.RunAsync();


