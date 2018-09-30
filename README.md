<div align="center">
    <img src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/hoaxwagen.svg" alt="Icon" width="600" />
  <br><br>
  <p>Hoaxwagen detects <a href="https://github.com/auchenberg/volkswagen">Volkswagen</a> in dependencies. Brilliantly.</p>
</div>

<p align="center">
  <a href="https://travis-ci.com/CleanCode-Group/hoaxwagen"><img alt="Build Status" src="https://travis-ci.com/CleanCode-Group/hoaxwagen.svg?branch=master"></a>
  <a href="https://www.npmjs.com/package/hoaxwagen"><img alt="npm" src="https://img.shields.io/npm/v/hoaxwagen.svg?logo=npm&colorB=de0000"></a>
  <a href="https://github.com/CleanCode-Group/hoaxwagen"><img alt="Not using VW" src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/not-using-vw.svg"></a>
</p>

---

## Why?

Under no circumstances Americans (accoring to [Volkswagen package page](https://github.com/auchenberg/volkswagen)) shall be deceived! Tests are essential! Tests are one of the most important tools in developers world!
But what they did... they deceived us! How dare they do it?! How dare they tamper tests!? Just to get a nice green shield in README!?? It's miserable! If one doesn't want to write tests, he shouldn't be a developer, he really should not!
As the head of the Clean-Code Group, I present you the flawless tool for eradicating such a disease! Use it everywhere, anytime!

## How would I get it?

Use Yarn. (Or npm). `yarn add hoaxwagen` or `npm install hoaxwagen` will do exactly as the commands say.
Or, using it as a CLI, `yarn global add hoaxwagen` or `npm install -g hoaxwagen`
<br>

*Not really hard, is it?*

## How would I use it?

Well, you have two options: either to use `require()`, or to run a CLI

### Using as a library

Somewhere in your javascript project or, even better, in Webpack (or whatever tool you use), include the following code snippet:

```javascript
require('hoaxwagen').monitor();

// continue adding whatever usually needs to be added
```

That's it!

And, while building, you might see this:

```
✅ Clean!
```

or, occasionally, this:

```
🚨 WARNING 🚨

Volkswagen 🛴 is detected in the following packages:
├─ ugly-package-1 @ 0.0.0 (yarn.pm/ugly-package-1)
├─ ugly-package-2 @ 0.0.0 (yarn.pm/ugly-package-2)
└─ ugly-package-3 @ 0.0.0 (yarn.pm/ugly-package-3)

🚧🕳 BE AWARE OF POSSIBLE FUTURE CONSEQUENCES!
```

### Library methods

There're actually several things you can do apart from observing a warning message in the webpack:

Method name|Description|Return value|Appeared in
-----------|-----------|------------|-----------
`isFraud()`|Checks if Volkswagen library exists in `node_modules`|boolean|v1.0.0
`monitor()`|Shows an alert if `isFraud()` returns true|void|v1.0.0
`getPackages()`|Returns a list of packages that uses Volkswagen|IPackage|v1.0.1

```typescript
interface IPackage {
    name:    string;
    version: string;
    yarn:    string; // URL link to package
    path:    string; // absolute path
}
```

<br>

As an example, let's go over the packages that use Volkswagen:

```javascript
const hoax = require("hoaxwagen");

const rogues = hoax.getPackages(); // yeah, let's get them out!

rogues.forEach(p => { // p is an IPackage
  console.log(p.name);
});
```

### Running as CLI

Using a CLI is much simpler. Install hoaxwagen like this: `yarn global add hoaxwagen` or `npm i -g hoaxwagen`

Run `hoaxwagen` in terminal, in any javascript project folder, and it will show you how deep the rabbit hole goes:

```java

Well, I've got bad news for you...

  ___ _____   ____  _   _  ____ _  ______  
 |_ _|_   _| / ___|| | | |/ ___| |/ / ___| 
  | |  | |   \___ \| | | | |   | ' /\___ \ 
  | |  | |    ___) | |_| | |___| . \ ___) |
 |___| |_|   |____/ \___/ \____|_|\_\____/ 
                                           
Volkswagen was detected in the following packages:
├─ long-package @ 1.0.0 (yarn.pm/long-package) in /Users/user/path/to/long-package
└─ package      @ 2.0.0 (yarn.pm/package)      in /Users/user/path/to/package

```

or a boring version:
```
✅ Clean!
```

***Actually**, the use of the rabbit hole allegory was a little too generous. What this library is definitely not going to do is show you the dependency map. Search by yourself. (No offence).*

## S.H.I.E.L.D.

Look at it! Such a nice shield we've made for you! Feel free to use everywhere!

<div align="center">
  <img alt="Not using VW" src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/not-using-vw.svg" width="450">
</div>

<br>

Including it in your README will make the code ~run 1000x faster~ look better than without it, I swear!

Use it in markdown like this:
```markdown
[![Not using VW](https://hoax.gq/not-using-vw.svg)](https://hoax.gq)
```

In html use this:

```html
<a href="https://hoax.gq"><img alt="Not using VW" src="https://hoax.gq/not-using-vw.svg"></a>
```

Or print it out and stick it on the things:

<div align="center">
  <img src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/shield_laptop.jpg" width="200" height="171"> <img src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/shield_comp.jpg" width="200" height="171"> <img src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/shiekd_house.jpg" width="200" height="171"> <img src="https://cdn.rawgit.com/CleanCode-Group/hoaxwagen/46f7c760/imgs/shield_tattoo.jpg" width="200" height="171">
</div>

## Contributing to Hoaxwagen

Contributions are always welcome. There's no code of conduct, so feel free to do whatever you want, yeah!

**But don't forget to give it a star!**

## Disclaimer

Any similarities with a current event concerning (but not limited to) a multinational automobile manufacturer are purely coincidental.
