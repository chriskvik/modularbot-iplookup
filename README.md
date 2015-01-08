Modularbot-IPLookup
==============

Simple ip-lookup module for your [ModularBot](https://github.com/Xstasy/modular-bot) installation. This module lookups ip's and shows information available against this adress. Examples are : Country, City, Region, ISP, Hostname. The module also tries to find associated domains with the given ip-adress.


### How it looks
###### With an ip-adress pointing towards nytimes.com
```
<User> .ip 170.149.172.130
<ModularBot> IP-Lookup | United States, Washington, Seattle.
<ModularBot> Tech      | 170.149.172.130 ISP : The New York Times Company - The New York Times Company
<ModularBot> Location  | http://maps.google.com/?q=47.6062,-122.3321
<ModularBot> Domains   | apps.beta620.nytimes.com,atwar.blogs.nytimes.com,autos.nytimes.com
```

### Installation

```
This modules has no dependencies, except the ones required by modularbot. (Request)
Just copy the script to your ModularBot /modules folder. And issue the reload command, in cli or #channel. (.reload).
```
