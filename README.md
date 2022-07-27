# First Flags with LaunchDarkly

![](./osmo.png)

This application is designed to use several feature flags to showcase the ability to release features quickly using [LaunchDarkly](https://www.launchdarkly.com). 

**Note** - Sign up for a [free trial of LaunchDarkly](https://app.launchdarkly.com/signup) to explore creating these Feature Flags. <br>These can be created manually in the portal, or automatically leveraging tools like Terraform (instructions included!). 


## Editing and Building in Replit

**:warning: Important** - You'll need to create a secret in replit that references your LaunchDarkly <br>**Client-side ID**. 

The secret should be named: 
> VITE_LD_CLIENT_ID

and the value should hold be the `Client-side ID`

**:warning: Potential gotcha**: make sure you got the **"Client-side ID"** from the LaunchDarkly console and not one of the other keys! You can get this easily by pressing CMD+K or CTRL+K, typing "copy" and selecting `Copy SDK key for the current environment` and selecting **"Client-side ID"** from the list. This will add it to your clipboard for easy copy and paste. 


## Setting up the Feature Flags in LaunchDarkly

### :star: Terraform through the CLI (Recommended)
  - Prerequisites
    - A *little* comfort with the command line
    - Terraform CLI installed (this is super easy)
  - [Instructions](https://replit.com/@LaunchDarkly/Launch-Features-with-LaunchDarkly#Terraform/README.md)

****
### Manually in the LaunchDarkly Console
  1. Login to LaunchDarkly if you aren't already
  2. **Step by step in the console**
     1. Select `Create flag` on the right hand side
     2. Give your feature flag the name `newui`
     3. Leave this as a boolean flag, and ensure Client Side is checked
     4. Select Save flag

****

## :champagne: Let's pop some flags :champagne:

:rocket: If you've set everything up, you should be ready to roll! :rocket:

From here, we can enable our new feature and observe how our application changes based on a new feature being rolled out. 

* `newui`
  - This feature flag changes the view of the application out of the Osmo logo, introducing a new banner, image, and text.