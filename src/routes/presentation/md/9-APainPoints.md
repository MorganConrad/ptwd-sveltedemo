---
title: Some Pain Points / Confusions
prev: 8-Other-resources
next: 9-Conclusion
---

## Some of these are not specific to Svelte

### Too many damn files with the same name!

 - I put a comment line early in the file
   - also just made a feature request...
 - VSCode extensions to color tabs by folder? _under development_
 - Some unix users have complained about the `+[` etc. causing minor glitches, especially with scripts

### Vite

 - does wonderful stuff, "magic", fast
 - Glob imports can't use variables as they are not statically analyzable
   - OK: `import.meta.glob("/src/routes/presentation/md/*.md")`
   - NOT: `import.meta.glob("/src/routes/" + someVariable + "/*.md")`
   - some other minor annoyances...
   - that whole incantation is awkward... (write a utility)
 - Cannot access the /static folder, only /src
   - can override in settings - safe???s

### Mdsvex (Markdown _Pre_processor, like MDX)

 - generally does what you want.  Some extensibility.
 - if it doesn't, good luck
 - unreliable programmatic access to the HTML content
   - `<svelte:component this={data.content} />` works!
 - There are a couple of dynamic markdown components in development

### Client vs. Server

 - What it running where sometimes confusing (at least to me!)
   - get console.log() messages in terminal and in browser
   - a "singleton" got created twice

### Debugging

 - again, mainly me.  Lots of `console.dir()...`
 - since it gets compiled, basic stack traces are mainly useless
 - there are dev tools, need to explore
 - Svelte has a special tag to help   `{@debug var1, var2}`

### Sometimes you just want to access the file system

 - wrote a prebuild node script to pregenerate stuff
 - or crazy adapter stuff

### Templating is just different enough to confuse

 - Many of my pages had extra $ since I'm used to javascript
   - &nbsp;&nbsp;``Hello  &nbsp;{name}``     (Svelte)
   - `` `Hello ${name}` ``   (JS)

