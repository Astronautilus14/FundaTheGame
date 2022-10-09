const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
    const data = await getRandomHouseData();
    res.send(JSON.stringify(data));
})

function getRandomHouseData() {
    const page = Math.floor(Math.random() * 2999) + 1;
    return axios(`https://www.funda.nl/koop/heel-nederland/p${page}/`, {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "cookie": ".ASPXANONYMOUS=FNkUu7WbKS67F8t0HhHd7e6PZQKlpJIMssnGJ-zNeSKQTT22_VAE6Z_tQeTBYq9qS0AiSN81FzmDGA2KNzAfXOciudDCEWqZtx63ViT3Q98XDd83Bo-Ir2WYZjn4Ru4CsfE4tv0-y-xzGZbDdmHhghYFo3M1; sr=0%7cfalse; _gid=GA1.2.728112712.1665328389; OptanonAlertBoxClosed=2022-10-09T15:13:10.790Z; eupubconsent-v2=CPgk3zAPgk3zAAcABBENCkCgAPLAAAAAAChQGgNF7S5dRGPCWG58ZtskOQQPoNSMJgQjABaJAmgJwAKAMIQCkmASPATgBAACCAYAKAIBAANkGAAAAQAAQAAAAAGEQAAABAIIICIAgBIBCAAIAAQAAAAQQAAAgEACAEAAkgAAAIIAQEAABAAAAeEgMgAIAAWABUADIAHAAPAAgABkADQAHgARAAmABPACqAFgAN4AjgBLgDDAH6ARwAlIC5AF5gMkCADwAHgAfABaAFAALYAfwBFgC-AGoAQMAxQCLwEegJWAU2GAGAALACeAFQALYAbwBFgDUAJaAYoA6gCLwFNhoAYAXIC0ALSAuQQAJAAWAE8ALYAbwBFgDUAJaAYoBF4iACAuQUAvAAaAA-ADAAMgAiABYADEAJgAXIAvADEAG0APEAfwCCAEKAI4ASYAoABUACtAFkAMqAagBqwDiAOQAeYBHACTAEtgJ4AnoBSACvwFoAWkAu4BgQDFQGcAZ0A0ABpwDhQH6AfsBAgCPQEggJ3AUQAswBcgC8wF8jAFAAD4AMAAyACIAFgAMQAmABegDCAMQAbYA_gEEAI4ASYAoABUACtAFkAMcAZQA1IBxAHIAPMAjgBLYCeAJ6AUgAr4BdwDFQGcAZ0A0EBpgGnAOEAfsBAgCPQEggJ3AUQAswBeY4A8AAgAB4AFwAPgAtAByAD8AKAAWwAvgBoAD-AI4AWQAvgBqAEDAIQAREAloBWYDAAMCAZkA14CPQErAJiAU2AqYBfQ6BKAAsACoAGQAOAAggBiAGQANAAeAA-ACIAEwAJ4AVQAsABcADEAG-AS4BMACxAGGAMoAaIA3wB-gEWAI4ASmAtAC0gF1AMUAdQBF4CQQFWALkAXmAyQgA6AACAAgABYADQAHgAZABEACwAGMATABNACqAFyALwAxABoADaAG-AP4BAgCLAEcAJMAUAAqABWwCxALIAXwAyoBqAGqAN8AcQA5AB5gEcAJSATgAngBSACsgFfgLQAtIBdwDAAGKAMzAZwBnQDQQGmAacA4QB1ID9AP3AgACBAEegJBATuAogBZgC2QFyAL5JQFAAEAALAAyABwAGIAPAAiABMACqAFwAMQAjgBlAEcgLQAtIBdQDFAHUAReAvMkAMAAuADkAKgAbwBZAC-AGoAS0ArIBrwErAL2KQGQAFgAVAAyABwAEEAMQAyABoADwAIgATAAngBVACwAGIAWIAygBogD9AIsARwAlICLwFyALzAZIUALgAXAA-AC0AHIAPwAqABfADeAI4AWQAvgBqAEtAKyAXUAwABigDXgI9ATEApsBUwC-g.flgAAAAAAAAA; optimizelyEndUserId=oeu1665328391669r0.12635643762101356; ajs_anonymous_id=%227c8c9a53-cc1d-45ea-949f-d4aae9cfc3fc%22; fd-user-checked=true; _gcl_au=1.1.1541657497.1665328393; SNLBCORS=84388421d3321c35e1d95bee354a8711; SNLB=84388421d3321c35e1d95bee354a8711; html-classes=js; ak_bmsc=1E305DA0BC4218E8CBF24F040635B12B~000000000000000000000000000000~YAAQjFZhaBpFoaKDAQAAWNGvvhF/ri8oYpNbnmUYvi8TFKFONsItGWTkECbA1igwEN/d5DYmET2DSvqb4Jd0UBtrMlSvgIrydlvC9EW723zyRdMUhqodJ2NUupfhkLoyj9l0HnVSd7/WDSFYH41htud5IuTyvW+DfLEnwAquIunr/7NpgU1qBvLlrxlmriq9edSAz0pRkCv+/f/XaEUsE+QgcNfjPZ/1D/uRo5bsyxk+3f3oH2E36e3vK4MqYWf8YGp6UHoJA2ABhkMyujByTKU6DwsnQVHtvzyftBh950ZTPhv7200ColK7hsZDsUkrjZ5CZbFyPyYMVUBpe5D815CX3nIGrc5On8u7G722miumnSeSHfsvzBHrFPPla9pm0t6pA89kAb72OgJfPBdDagi3H/O5ZQuzTRmlicgo2PTjsXHiqitPU7eQP4gfNdOS0hMKK0f3lQFQjm+BTalbFLjc65v40gUzwgqcREr3PXyxerIxxUs=; _hjSessionUser_2869769=eyJpZCI6Ijk1ZTM4YTk3LWNiNDYtNTQ0ZS1iYTgxLTdkZjY4OGVmNWQ3MSIsImNyZWF0ZWQiOjE2NjUzMjgzOTI4NzIsImV4aXN0aW5nIjp0cnVlfQ==; _hjIncludedInSessionSample=1; _hjSession_2869769=eyJpZCI6ImIwNGQ5Mjc0LWMyZmEtNDg4Ni04N2IwLTQ1ZmI0ZDkzMDRmMiIsImNyZWF0ZWQiOjE2NjUzNTE1MzcyOTksImluU2FtcGxlIjp0cnVlfQ==; sessionstarted=true; lzo=koop=%2fkoop%2fheel-nederland%2f; objectnotfound=objectnotfound=false; bm_sv=428E45E8F44F7A02D9A776546DE7E68F~YAAQNv7dWAPrXn6DAQAA7ee8vhHXWfmc42oM0h/66z9NnUGNWBTFlpj674dSwVMciD4DqAndj1Ghw2YavUswPp6NKAQ0wEbP31WWh21V+x+xAZN9aW/HPquyWhxYrviBkd04aGVbkKds6P0lVTSIRKrL7A9LhqGENEjrfgUU87tioj/RMn87CCpwZKbSoazSG77h5rfgAqj1aJ/lljhxxXKoviK6QmWfg2giNq/MVFO/9n/d1JBsE0WZVs72Xg==~1; _ga_WLRNSHBY8J=GS1.1.1665351536.2.1.1665352395.0.0.0; OptanonConsent=isIABGlobal=false&datestamp=Sun+Oct+09+2022+23%3A53%3A16+GMT%2B0200+(Midden-Europese+zomertijd)&version=6.39.0&hosts=&consentId=fa527d62-53de-48c1-9d9b-c33672d39c67&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CF01%3A1%2CF02%3A1%2CF03%3A1%2CBG41%3A1%2CF04%3A1%2CC0004%3A1%2CF05%3A1%2CBG42%3A1%2CSTACK39%3A1&geolocation=NL%3BDR&AwaitingReconsent=false; _ga=GA1.2.209598241.1665328389; g_state={\"i_p\":1665359613607,\"i_l\":1}; _dd_s=logs=1&id=43b84833-6076-4311-ae97-247bd6caf56e&created=1665351535931&expire=1665354286792",
        "Referer": "https://www.funda.nl/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "get"
    })
    .then( res => {
        const js = cheerio.load(res.data)('script[type="application/ld+json"]');
        const links = JSON.parse(js[js.length-1].children[0].data).itemListElement;
        const link = links[Math.floor(Math.random() * links.length)].url;
        return axios(link, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": ".ASPXANONYMOUS=FNkUu7WbKS67F8t0HhHd7e6PZQKlpJIMssnGJ-zNeSKQTT22_VAE6Z_tQeTBYq9qS0AiSN81FzmDGA2KNzAfXOciudDCEWqZtx63ViT3Q98XDd83Bo-Ir2WYZjn4Ru4CsfE4tv0-y-xzGZbDdmHhghYFo3M1; sr=0%7cfalse; _gid=GA1.2.728112712.1665328389; OptanonAlertBoxClosed=2022-10-09T15:13:10.790Z; eupubconsent-v2=CPgk3zAPgk3zAAcABBENCkCgAPLAAAAAAChQGgNF7S5dRGPCWG58ZtskOQQPoNSMJgQjABaJAmgJwAKAMIQCkmASPATgBAACCAYAKAIBAANkGAAAAQAAQAAAAAGEQAAABAIIICIAgBIBCAAIAAQAAAAQQAAAgEACAEAAkgAAAIIAQEAABAAAAeEgMgAIAAWABUADIAHAAPAAgABkADQAHgARAAmABPACqAFgAN4AjgBLgDDAH6ARwAlIC5AF5gMkCADwAHgAfABaAFAALYAfwBFgC-AGoAQMAxQCLwEegJWAU2GAGAALACeAFQALYAbwBFgDUAJaAYoA6gCLwFNhoAYAXIC0ALSAuQQAJAAWAE8ALYAbwBFgDUAJaAYoBF4iACAuQUAvAAaAA-ADAAMgAiABYADEAJgAXIAvADEAG0APEAfwCCAEKAI4ASYAoABUACtAFkAMqAagBqwDiAOQAeYBHACTAEtgJ4AnoBSACvwFoAWkAu4BgQDFQGcAZ0A0ABpwDhQH6AfsBAgCPQEggJ3AUQAswBcgC8wF8jAFAAD4AMAAyACIAFgAMQAmABegDCAMQAbYA_gEEAI4ASYAoABUACtAFkAMcAZQA1IBxAHIAPMAjgBLYCeAJ6AUgAr4BdwDFQGcAZ0A0EBpgGnAOEAfsBAgCPQEggJ3AUQAswBeY4A8AAgAB4AFwAPgAtAByAD8AKAAWwAvgBoAD-AI4AWQAvgBqAEDAIQAREAloBWYDAAMCAZkA14CPQErAJiAU2AqYBfQ6BKAAsACoAGQAOAAggBiAGQANAAeAA-ACIAEwAJ4AVQAsABcADEAG-AS4BMACxAGGAMoAaIA3wB-gEWAI4ASmAtAC0gF1AMUAdQBF4CQQFWALkAXmAyQgA6AACAAgABYADQAHgAZABEACwAGMATABNACqAFyALwAxABoADaAG-AP4BAgCLAEcAJMAUAAqABWwCxALIAXwAyoBqAGqAN8AcQA5AB5gEcAJSATgAngBSACsgFfgLQAtIBdwDAAGKAMzAZwBnQDQQGmAacA4QB1ID9AP3AgACBAEegJBATuAogBZgC2QFyAL5JQFAAEAALAAyABwAGIAPAAiABMACqAFwAMQAjgBlAEcgLQAtIBdQDFAHUAReAvMkAMAAuADkAKgAbwBZAC-AGoAS0ArIBrwErAL2KQGQAFgAVAAyABwAEEAMQAyABoADwAIgATAAngBVACwAGIAWIAygBogD9AIsARwAlICLwFyALzAZIUALgAXAA-AC0AHIAPwAqABfADeAI4AWQAvgBqAEtAKyAXUAwABigDXgI9ATEApsBUwC-g.flgAAAAAAAAA; optimizelyEndUserId=oeu1665328391669r0.12635643762101356; ajs_anonymous_id=%227c8c9a53-cc1d-45ea-949f-d4aae9cfc3fc%22; fd-user-checked=true; _gcl_au=1.1.1541657497.1665328393; SNLBCORS=84388421d3321c35e1d95bee354a8711; SNLB=84388421d3321c35e1d95bee354a8711; html-classes=js; ak_bmsc=1E305DA0BC4218E8CBF24F040635B12B~000000000000000000000000000000~YAAQjFZhaBpFoaKDAQAAWNGvvhF/ri8oYpNbnmUYvi8TFKFONsItGWTkECbA1igwEN/d5DYmET2DSvqb4Jd0UBtrMlSvgIrydlvC9EW723zyRdMUhqodJ2NUupfhkLoyj9l0HnVSd7/WDSFYH41htud5IuTyvW+DfLEnwAquIunr/7NpgU1qBvLlrxlmriq9edSAz0pRkCv+/f/XaEUsE+QgcNfjPZ/1D/uRo5bsyxk+3f3oH2E36e3vK4MqYWf8YGp6UHoJA2ABhkMyujByTKU6DwsnQVHtvzyftBh950ZTPhv7200ColK7hsZDsUkrjZ5CZbFyPyYMVUBpe5D815CX3nIGrc5On8u7G722miumnSeSHfsvzBHrFPPla9pm0t6pA89kAb72OgJfPBdDagi3H/O5ZQuzTRmlicgo2PTjsXHiqitPU7eQP4gfNdOS0hMKK0f3lQFQjm+BTalbFLjc65v40gUzwgqcREr3PXyxerIxxUs=; _hjSessionUser_2869769=eyJpZCI6Ijk1ZTM4YTk3LWNiNDYtNTQ0ZS1iYTgxLTdkZjY4OGVmNWQ3MSIsImNyZWF0ZWQiOjE2NjUzMjgzOTI4NzIsImV4aXN0aW5nIjp0cnVlfQ==; _hjIncludedInSessionSample=1; _hjSession_2869769=eyJpZCI6ImIwNGQ5Mjc0LWMyZmEtNDg4Ni04N2IwLTQ1ZmI0ZDkzMDRmMiIsImNyZWF0ZWQiOjE2NjUzNTE1MzcyOTksImluU2FtcGxlIjp0cnVlfQ==; sessionstarted=true; lzo=koop=%2fkoop%2fheel-nederland%2f; objectnotfound=objectnotfound=false; bm_sv=428E45E8F44F7A02D9A776546DE7E68F~YAAQNv7dWAPrXn6DAQAA7ee8vhHXWfmc42oM0h/66z9NnUGNWBTFlpj674dSwVMciD4DqAndj1Ghw2YavUswPp6NKAQ0wEbP31WWh21V+x+xAZN9aW/HPquyWhxYrviBkd04aGVbkKds6P0lVTSIRKrL7A9LhqGENEjrfgUU87tioj/RMn87CCpwZKbSoazSG77h5rfgAqj1aJ/lljhxxXKoviK6QmWfg2giNq/MVFO/9n/d1JBsE0WZVs72Xg==~1; _ga_WLRNSHBY8J=GS1.1.1665351536.2.1.1665352395.0.0.0; OptanonConsent=isIABGlobal=false&datestamp=Sun+Oct+09+2022+23%3A53%3A16+GMT%2B0200+(Midden-Europese+zomertijd)&version=6.39.0&hosts=&consentId=fa527d62-53de-48c1-9d9b-c33672d39c67&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CF01%3A1%2CF02%3A1%2CF03%3A1%2CBG41%3A1%2CF04%3A1%2CC0004%3A1%2CF05%3A1%2CBG42%3A1%2CSTACK39%3A1&geolocation=NL%3BDR&AwaitingReconsent=false; _ga=GA1.2.209598241.1665328389; g_state={\"i_p\":1665359613607,\"i_l\":1}; _dd_s=logs=1&id=43b84833-6076-4311-ae97-247bd6caf56e&created=1665351535931&expire=1665354286792",
                "Referer": "https://www.funda.nl/",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "get"
        })
        .then( res => {
            const js = cheerio.load(res.data)('script[type="application/ld+json"]');
            const { photo, address, offers } = JSON.parse(js[2].children[0].data);
            let photoLinks = []
            for (const photoElement of photo) {
                photoLinks.push(photoElement.contentUrl);
            }
            const price = offers.price;
            const addressData = {
                street: address.streetAddress,
                location: address.addressLocality,
                region: address.addressRegion
            }
            return ({
                photoLinks: photoLinks,
                price: price,
                address: addressData
            });
        });
    })
    .catch( error => {
        console.error(error);
        res.status(500).send(error);
    });
}

const port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port ' + port);