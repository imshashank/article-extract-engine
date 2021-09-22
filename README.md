<!--
title: 'Article Extract Serverless API'
description: 'Use Firefox's readability as a serverless API to extract any article'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/imshashank'
authorName: 'Shashank Agarwal'
authorAvatar: 'https://avatars.githubusercontent.com/u/778870?v=4'
-->

# Article Extract Serverless API using Node.js & Readability

Use firefox's Readability to extract any article. Can be used to support Reader Mode in any app. Used AWS Lambda as the
backend. This was used as one of the systems to extract article by the Pipfeed(pipfeed.com) backend.

Used:

- Readability: https://github.com/mozilla/readability

## Use-cases

- Add `Reader Mode` to any application
- Extract all parts of an article
- Alternative to paid services like `Diffbot`, `Embed.ly` & others.

## Tested on

- Medium.com articles
- CNN

## How it works

Load Readability as a node module and extracts the article and returns the title, body and other field it was able to
extract.

## Setup

None needed.

## Deploy

In order to deploy the endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service article-extract-engine.zip file to S3 (5.58 MB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
...............
Serverless: Stack update finished...
Service Information
service: article-extract-engine
stage: dev
region: us-east-1
stack: article-extract-engine-dev
resources: 6
api keys:
  None
endpoints:
functions:
  extract: article-extract-engine-dev-extract
layers:
  None
Serverless: Deprecation warning: Resolution of lambda version hashes was improved with better algorithm, which will be used in next major release.
            Switch to it now by setting "provider.lambdaHashingVersion" to "20201221"
            More Info: https://www.serverless.com/framework/docs/deprecations/#LAMBDA_HASHING_VERSION_V2

Toggle on monitoring with the Serverless Dashboard: run "serverless"
```

## Usage

You can now invoke each of the Lambdas directly and print their log statements via

Install Serverless if not already, also make sure AWS creds are configured.

```bash
npm install -g serverless
```

```bash
serverless invoke --function=extract --log --data '{ "url": "https://system.camp/startups/understanding-kpis-for-mobile-apps-and-how-to-measure-kpis/" }'
```

The expected result should be similar to:

```bash
{
    "statusCode": 200,
    "headers": {
        "Content-Type": "text/html"
    },
    "body": {
        "url": "https://system.camp/startups/understanding-kpis-for-mobile-apps-and-how-to-measure-kpis/",
        "content": "<div class=\"page\" id=\"readability-page-1\"><div>\n\t\n\n<p>KPIs are the ultimate indicator for how well you Mobile app is doing. KPI stands for Key Performance Indicator. The first rule of KPIs is that they need to be the “key indicators” of your business model and should always relate to the financial model directly.</p>\n\n\n\n<p>Why? Because you want to quantify and improve these KPIs to help your company earn more money or get more users.</p>\n\n\n\n<p>The main goal of any app is either to make the sure users are using the app frequently or they are paying frequently. Hence it is hard to make a lot of profits from Utility apps like Calculators. These apps are really good but the overall usage is quite low and hence the Business Model will not make sense to build a company around these use-cases.</p>\n\n\n\n<p>Based on these metrics we can then define how much money the apps can make.</p>\n\n\n\n<h2 id=\"let-s-define-the-kpis-first-\">Let’s define the KPIs first:</h2>\n\n\n\n<h3 id=\"retention-rate\">Retention Rate</h3>\n\n\n\n<p>Retention Rate is the most important metric for a mobile app. This defines the “percentage” of users that are still using the app after a certain time has passed.</p>\n\n\n\n<p>For example: If your app has 1000 user signed up. After one month you check how many users have opened the app in the second month. So in second month if 300 users have opened the app then you retention rate is defined as :</p>\n\n\n\n<blockquote><p>300/1000 = 30%</p></blockquote>\n\n\n\n<p>So the retention rate is 30%. Industry average is around 15% to 60%. Mobile apps like Facebook, Instagram &amp; watsapp have a retention rate of over 70% hence they have these insane valuations.</p>\n\n\n\n<h3 id=\"conversion-rate-\">Conversion Rate:</h3>\n\n\n\n<p>This metric is useful for mobile apps that offer a Subscription Model. Conversion rate in this scenario means how many users are converting to paid subscribers.</p>\n\n\n\n<p>For example: From the 300 Monthly Active Users(MAU) if 60 pay and become your subscribers then your conversion rate can be calculated as:</p>\n\n\n\n<blockquote><p>300/60 = 20%</p></blockquote>\n\n\n\n<p>Hence you have a 20% conversion rate. &nbsp;Industry average is around 10%. The Harvard Business Review found that even a 5% increase in retention could increase revenues by <a rel=\"noopener\" href=\"https://amplitude.com/blog/2016/01/27/understanding-user-retention\">25% to 95%</a>.</p>\n\n\n\n<h2 id=\"cost-per-acquisition-cpa-\">Cost Per Acquisition(CPA)</h2>\n\n\n\n<p>Cost Per Acquisition is defined as the average cost to acquire a user. This cost must be averaged out over long periods spanning multiple months to get the big picture.</p>\n\n\n\n<p>The other KPI metrics will help you understand how valuable is your app. But CPA defines if your app makes sense in terms of a viable business.</p>\n\n\n\n<p>There are various channels for acquiring users:</p>\n\n\n\n<ul><li>Ads (Google, Facebook, LinkedIn, Twitter, SnapChat, TikTok, Apple etc.)</li><li>Influencer Marketing</li><li>SEO/Blog Content</li><li>Directory Listings (ProductHunt, BetaFy etc.)</li><li>Community Forums</li><li>Direct Advertising (Podcasts, Rent Websites etc.)</li><li>And hundreds more</li></ul>\n\n\n\n<h2 id=\"lets-see-how-all-these-numbers-fit-in-a-financial-model-\">Lets see how all these numbers fit in a Financial Model:</h2>\n\n\n\n<p>The model is quite straightforward once you have the KPIs.</p>\n\n\n\n<p>In the below example we are looking at apps that earn from Subscription or Monthly Recurring Revenue.</p>\n\n\n\n<h2 id=\"now-let-s-look-at-apps-that-earn-from-subscription-only-\">Now let’s look at apps that earn from Subscription only.</h2>\n\n\n\n<p>In this model we are also making an assumption that people are willing to pay for the service and a significant number of users exist that are willing to pay for the service you are providing. This is what truly a startup does, finds a service people are willing to pay for and make sure that there is a large number of users willing to pay for this service. If you have this then you have a great business that investors will be happy to invest in.</p>\n\n\n\n<p>We will look at an app like Pocket.</p>\n\n\n\n<h3 id=\"assumptions-\">Assumptions:</h3>\n\n\n\n<p><strong>Retention Rate:</strong> 30%<br><strong>Conversion Rate:</strong> 10%<br><strong>Monthly Subscription Cost:</strong> $4.99<br><strong>CPA:</strong> $1/-</p>\n\n\n\n<p>To get 1000 users we spend<br>Number of Users * CPA = 1000 USD</p>\n\n\n\n<p>Monthly Active Users<br>Total Users * Retention Rate<br>1000 * 30% = 300 MAU</p>\n\n\n\n<p>Subscription earning from MAU<br>MAU * Conversion Rate * Average Subscription Cost<br>300 * 10% * 4.99 = 149.7</p>\n\n\n\n<p>Yearly Subscription earning<br>149.7 * 12 = 1796.4</p>\n\n\n\n<p>Profits<br>$1796.4 – $1000 = $794.4</p>\n\n\n\n<p>So, if we spend 1000 dollars we earn a profit of 794.4. If you can scale this system to 100,000 users then your yearly profits become: $794,00.4. This is a pretty good &amp; viable business model that investors will be ready to invest in to help you scale.</p>\n\n\n\n<p>Pocket had around 20 million users in 2015. So if we plug the numbers in the above model we get a yearly revenue from 20 million users at $15,888,000 (over 15 million dollars). Pocket app got acquired for around 30 million by Mozilla Foundation.</p>\n\n\n\n<p>SaaS usually have a retention rate of over 80%. Retention like this is required as the Cost Per Acquisition is pretty high. That’s why you will see SaaS companies offering $10 to $1000 referral commission.</p>\n\n\n\n<h2 id=\"now-let-s-look-at-apps-that-earn-from-ads-only-\">Now let’s look at apps that earn from Ads only.</h2>\n\n\n\n<p>For advertising based apps the most important number is Total Users &amp; Retention.</p>\n\n\n\n<p>In mass consumer apps finding the total retained users is a bit tricky. These apps only make sense if the Retention Curve is a “Smile” curve like this:</p>\n\n\n\n<figure><span data-svq-align=\"\"><img data-src=\"https://system.camp/wp-content/uploads/2020/10/retention_smile_curve.png\" data-height=\"802\" data-width=\"1133\" alt=\"\" src=\"https://system.camp/wp-content/uploads/2020/10/retention_smile_curve.png\"><span></span></span><figcaption>Evernote Retention Curve. Source: https://www.sequoiacap.com/article/retention</figcaption></figure>\n\n\n\n<p>This below retention graph is an example of long tail retention. Where some percentage of your users choose to stick around for a longer time and hence make the financial model viable.</p>\n\n\n\n<figure><span data-svq-align=\"\"><img data-src=\"https://system.camp/wp-content/uploads/2020/10/retention-smile-flat.png\" data-height=\"600\" data-width=\"1014\" alt=\"\" src=\"https://system.camp/wp-content/uploads/2020/10/retention-smile-flat.png\"><span></span></span><figcaption>Retention Graph. Source: https://www.sequoiacap.com/article/retention</figcaption></figure>\n\n\n\n<p>You can use Retention curve graph to find if you Product Market Fit. I should probably write an article on understanding retention rates.</p>\n\n\n\n<p>In any case we assume the overall retention assuming you has a smile graph and your long tail users are sticking around and using the app. For this use case this is what the financial model will look like.</p>\n\n\n\n<p>Let’s look an app like FlipBoard:</p>\n\n\n\n<h3 id=\"assumptions--1\">Assumptions:</h3>\n\n\n\n<p><strong>Retention Rate:</strong> 15%<br><strong>Average Earning from Ads/user/month:</strong> $0.5<br><strong>CPA:</strong> $0.5/-</p>\n\n\n\n<p>To get 1000 users we spend<br>Number of Users * CPA = $500</p>\n\n\n\n<p>Monthly Active Users<br>Total Users * Retention Rate<br>1000 * 15% = 150 MAU</p>\n\n\n\n<p>Ads earning from MAU<br>MAU * Average Earning From Ads Per User<br>150 * $0.5 = $75</p>\n\n\n\n<p>Yearly Ads earning<br>75 * 12 = 900</p>\n\n\n\n<p>Profits<br>$900 – $500 = $400</p>\n\n\n\n<p><strong>Earning per user overall: </strong>$0.4 per year</p>\n\n\n\n<p>Here we reduced the cost of customer acquisition to make sense of the model to $0.5. Unless you are able to achievea much lower CPA, advertising model will not work. Also ads based models only work for large number of user.</p>\n\n\n\n<p>FlipBoard has around 145 million Monthly Active Users. So putting these numbers into the above financial model we get their yearly revenue to be around:</p>\n\n\n\n<p>MAU * Average Earning from Ads/User * Months In Year</p>\n\n\n\n<p>145 million MAU * $0.5 * 12 = $870 Million</p>\n\n\n\n<p>The above model should be taken with a grain of Salt. This is a good model for “predicting” the possible outcome and usually at really large scale it depends on the business on how they chose to monetize.</p>\n\n\n\n<p>Usually mobile apps with such large number do direct deals with advertisers and are able to increase their annual earning. Flipboard doesn’t have an advertising platform like Facebook and deals with large advertisers/big companies directly.</p>\n\n\n\n<p>In some cases the goal is not just to increase the annual ads expenditure but maintain a consistent influx of ads revenue. This is a model followed by FlipBoard. They usually do month long or year long deals with Big Brands to have a consistent cash flow.</p>\n\n\n\n<p>The other big factor that defines how much you can charge for ads is the type of users you have. For apps like tiktok, most users fall in younger category and hence ads targeted at younger audience. These users have a lower monthly earning and are not that attractive to advertisers unless they can reach a really large number of users.</p>\n\n\n\n<p>LinkedIn can charge more for its ads as the users using the platform are mostly professionals. It is very hard to find professionals to advertise to on the Internet. This is what Microsoft saw when they acquired LinkedIn for $26.2 Billion.</p>\n\n\n\n<h2 id=\"how-to-use-this-model\">How to use this Model</h2>\n\n\n\n<p>So this was a guide on creating a Financial model for mobile apps. To use the above strategy to provide a more realistic model try to make your assumptions based on real world data.</p>\n\n\n\n<p>Before starting you should ask these questions:</p>\n\n\n\n<ul><li>Are user willing to pay for your service?</li><li>How much are they willing to pay?</li><li>How many users are there that you can realistically reach?</li></ul>\n\n\n\n<p>If you have answers to these problems that you can create a much more realistic model. It is very easy to validate your idea even before starting. Find your potential paying customers and ask them if they would want a service like this and they are willing to pay for this.</p>\n\n\n\n<p>Hope you like this guide and I hope it provides a framework for your startup. Wish you all the best.</p>\n\n\n\n<p>Let me know in the comments what you think.</p>\n\n\t\n\n<div>\n    <div>\n        <div>\n            <p><a rel=\"author\" href=\"https://system.camp/profile/shashank/\">\n\t\t\t\t\t<img loading=\"lazy\" width=\"80\" height=\"80\" srcset=\"https://secure.gravatar.com/avatar/33563973b6f338002e574f30a3f94788?s=160&amp;d=mm&amp;r=g 2x\" src=\"https://secure.gravatar.com/avatar/33563973b6f338002e574f30a3f94788?s=80&amp;d=mm&amp;r=g\" alt=\"\">                </a>\n            </p>\n            <p><span>\n                    \n                </span>\n                <span>\n                    <span>Member since</span>\n                     <time datetime=\"2020-10-05 07:14\">\n                        October 6, 2020                     </time>\n                </span>\n            </p>\n\n\t\t\t\n\t    \n\n\t\t\t\n        </div>\n\t\t    </div>\n\n\t\n\t</div>\n</div></div>",
        "excerpt": "How to create a financial model for a mobile app? How to measure KPIs? What are KPIs? Learn all this and more..."
    }
}
--------------------------------------------------------------------
START RequestId: 1737de56-085d-4e65-9562-e70d54ef4dd5 Version: $LATEST
2021-09-22 14:38:57.912 (+02:00)	1737de56-085d-4e65-9562-e70d54ef4dd5	INFO	Fetched and parsed https://system.camp/startups/understanding-kpis-for-mobile-apps-and-how-to-measure-kpis/ successfully
END RequestId: 1737de56-085d-4e65-9562-e70d54ef4dd5
REPORT RequestId: 1737de56-085d-4e65-9562-e70d54ef4dd5	Duration: 1353.61 ms	Billed Duration: 1354 ms	Memory Size: 1024 MB	Max Memory Used: 162 MB
```

The deployment will create a cloudformation stack that will deploy a AWS Lambda function. You can test the lambda by
simply passing a JSON string.

### Payload for invoking lambda function

```
{
  "url": "https://blog.producthunt.com/how-i-built-a-2-product-of-the-day-in-2-hours-6e94ef6ea2c1"
}
```

## License

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.