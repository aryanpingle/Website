# One Minute is More Than 60 Seconds

What's the difference between a 5 minute and a 30 minute commute to work? Surely, it must be 25 minutes. But is it not also the fatigue of being stuck in traffic? And the stress of waking up late, knowing you won't make it to the office in time? And the joy of reaching home quickly after a horrid day?

Working in the tech industry, it's quite natural to develop a fixation on numbers when it comes to comparing tradeoffs. Numbers are after all, the most objective information in any situation — and this firm belief has served us well in discerning between good and bad.

A surprisingly _irrational_ consequence of this belief however, is that tech folks tend to **only look at the numbers** that factor into making a decision.

---

[Nugget](https://www.nugget.com/) (a no-code customer support platform by Zomato) has a bi-weekly release cycle, which means features and bug-fixes are shipped twice every week — sometimes even more frequently if needed. That's the beauty of a start-up culture. I work in the Web Frontend team, where deployments take **15 minutes** to complete; significantly faster than Backend deployments that take **one hour**.

Correction — our deployments **used to take** 15 minutes to complete. Now they take just **2 minutes**.

I had realized our bottleneck lay in the build time, where we used [Webpack](https://webpack.js.org/) to bundle and minify our React + Typescript codebase. So I led a task to migrate our bundler to [Rsbuild](https://rsbuild.rs/), which resulted in lightning quick build times. All you need to know is that Rsbuild is a Webpack-compatible build tool that does the same thing but quicker.

So... great! I got to apply my knowledge about build tooling, and learn more in the process. But when I tried explaining the impact of these changes to my peers, I found a surprising lack of enthusiasm.

> "Good for you, but 15 minutes wasn't a long time in the first place. Why go through all this trouble just to save a little time?"

This blog is is the answer I wish I gave to that extremely fair question.

**The business impact**. A 2 minute deployment means only 2 minutes of downtime if we need to roll-back a change. When you're making a platform for customer-support executives who deal with around _100 disgruntled customers a day_, every minute something is broken, is a minute where a customer might be lost. 2 minutes per release means a comfortable window of testing & hot-fixes in the one hour window between release and deployment freezes.

**The tech impact**. Even better, those 13 minutes we saved are 13 minutes of available GitHub Actions for other teams who use our [self-hosted runners](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners) in that window.

Migrating our build tool came with another perk - the time it takes to start our local environment went down from **4 minutes** to **4 seconds**. This means faster iteration, and a smoother developer experience (I hope I don't need to convince you now that 4 minutes is more than 240 seconds).

**The human impact**. 15 minutes is a long time when you're awake at 11 PM and anxious about your changes. A 2 minute deployment helps both the engineer in charge, as well as the developer whose code is going live. If another release is required for a hotfix, neither party will have to stay up longer than a few additional minutes.

I love saying this while reviewing code:

"Write code that the average developer can understand — keeping in mind that the average developer is someone debugging your code at 1 AM, when they're hungry, thirsty and super stressed out."

So no — **one minute is not always just sixty seconds**. Sometimes it’s the difference between panic and composure, between losing a customer and retaining trust, between a groggy engineer staring at a progress bar and one confidently shipping again. The lesson isn’t that numbers don’t matter — it’s that they rarely tell the whole story on their own. In tech, we pride ourselves on being rational, but real impact lives in the space between the metrics: in the stress avoided, the momentum preserved, and the people quietly grateful that things just work a little faster than they used to.
