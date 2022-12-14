# First Flags with LaunchDarkly

![](./osmo.png)

This application is designed to use several feature flags to showcase the ability to release features quickly using [LaunchDarkly](https://www.launchdarkly.com). 

## Getting Started

**Step 1** - Sign up for a [free trial of LaunchDarkly](https://app.launchdarkly.com/signup) to explore creating these Feature Flags.

**Step 2** - Create the following feature flags within LaunchDarkly

* `login`
  - Create this flag as a boolean flag 
  - This feature flag will be used to enable the login UI that can be used to leverage targeting based on a user ID. 
* `newui`
  - Create this flag as a boolean flag
  - This feature flag changes the view of the application out of the Osmo logo, introducing a new banner, image, and text.

**Step 3** - Obtain your LaunchDarkly Client-Side ID. You can obtain this from the `Settings > Project > Your Project Name` screen, or by pressing `CMD+K` or `CTRL+K`, typing "copy" and selecting `Copy SDK key for the current environment` and selecting **"Client-side ID"** from the list. 

This will add it to your clipboard for easy copy and paste. 


**Step 4** - Create a secret in Replit (the lock screen on the left side of your editor) that references your LaunchDarkly <br>**Client-side ID**. 

The secret should be named: 
> VITE_LD_CLIENT_ID

and the value should hold be the `Client-side ID` from the clipboard in your earlier step (or the `Settings > Project > Your Project Name` screen)

**:warning: Potential gotcha**: make sure you got the **"Client-side ID"** from the LaunchDarkly console and not one of the other keys! 


## :champagne: Let's pop some flags :champagne:

:rocket: If you've set everything up, you should be ready to roll! :rocket:

From here, we can enable our new feature and observe how our application changes based on a new feature being rolled out. 

* `login`
  - Enable this feature first. Your UI should update to include a login screen. We can use this login screen to configure `Targeting Rules` within LaunchDarkly to target feature releases at specific users. 
* `newui`
  - Create a `targeting rule` for your user, for this feature flag. Ensure you set the `Default Rule` to false to ensure that only users who are targeted receive feature changes.