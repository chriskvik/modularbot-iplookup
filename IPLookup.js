/* Author: Christian Kråkevik
   Mail : christian(a)gmail.com
   Url  : https://github.com/iNzzane/modularbot-url
   Desc : IP-Lookup tool woth reverse domain-name search.
   Usg  : This module is created for usage with ModularBot https://github.com/Xstasy/modular-bot
   Help : Read readme for installation instructions.
*/

module.exports = {
    Module: function(Bot, Module) {
           
        // Listen for .ip on all channels
       
        Bot.Command('*', '.ip', {ip: "((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))"}, function (command) {

            Bot.Request('http://ip-api.com/json/'+command.args.ip, function (error, response, body) {
                
                // Query ip-information.
                if (!error && response.statusCode == 200) {
                  var info = JSON.parse(body)

                  if(!info.regionName) {info.regionName = "region unknown"};
                  if(!info.city) {info.city = "city unknown"};
              
                  if(info.isp) {
                  Bot.Send(command.to, "IP-Lookup | " +  info.country + ", " + info.regionName + ", " + info.city + ".");
                  Bot.Send(command.to, "Tech      | " +  info.query + " ISP : " + info.isp + " - " + info.org);
                  Bot.Send(command.to, "Location  | " + "http://maps.google.com/?q="+info.lat+","+info.lon);

                }

                else { Bot.Send(command.to, "IP-Lookup | No hits!");}
                }
            })

            // Query reverse-ip-domain lookup.
            Bot.Request('http://reverseip.logontube.com/?url='+command.args.ip+'&output=json', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                  var info = JSON.parse(body)

                  if(info.response.domain_count == 0) {
                    Bot.Send(command.to, "Domains   | No domains found");

                  }

                  if(info.response.domain_count < 3) {
                      Bot.Send(command.to, "Domains   | " + info.response.domains[0]);
                  }

                else {
                    Bot.Send(command.to, "Domains   | " + info.response.domains[0] + "," + info.response.domains[1] + "," +  info.response.domains[2]);
                }
              }
            })
        });
    }
};







