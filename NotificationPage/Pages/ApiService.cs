using Volo.Abp.DependencyInjection;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace NotificationPage.Pages
{
    public class ApiService : ITransientDependency
    {
        public async Task<List<NotificationData>> FetchNotificationFromApi()
        {
            var url = "http://localhost:3002/notification";
            var client = new HttpClient();
            client.BaseAddress = new Uri(url);
            HttpResponseMessage response = await client.GetAsync("").ConfigureAwait(false);
            if (response.IsSuccessStatusCode)
            {
                var jsonResult = await response.Content.ReadAsStringAsync();
                var notifications = JsonConvert.DeserializeObject<List<NotificationData>>(jsonResult);
                return notifications;
            }
            return null;
        }
    }
}
