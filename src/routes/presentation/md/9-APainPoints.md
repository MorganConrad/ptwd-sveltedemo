---
title: Some Pain Points / Confusions
prev: 8-Other-resources
next: 9-Conclusion
---

## Many of these are not specific to Svelte, but general

### Too many damn files with the same name!

 - I'll put a comment early in the file
 - VSCode extensions to color tabs by folder etc. under development
 - Some unix users have complained about the `+[` causing minor glitches

### Vite

 - does wonderful stuff, "magic", fast
 - Glob imports can't use variables as they are not statically analyzable
   - OK:  `import.meta.glob("/src/routes/presentation/md/*.md")`
   - NOT: `import.meta.glob("/src/routes/" + someVariable + "/*.md")`
   - some other minor annoyances...
   - that whole incantation is akward... (write a utility)
 - Cannot access the /static folder, only /src
   - can override

### Mdsvex (Markdown Preprocessor, like MDX)

 - generally does what you want.  Some extensibility.
 - if it doesn't, good luck
 - I never got reliable access to the Markdown content (module stuff?)
   - not the only one - saw similar bugs from others
   - `<svelte:component this={data.content} />` works!
 - There are a couple of dynamic markdown components in development

### Client vs. Server

 - What it running where always confusing (that's mainly me!)
   - log messages in terminal and on browser
   - a "singleton" got created twice

### Debugging

 - again, mainly me.  Lots of `console.log()...`
 - since it gets compiled, stack traces are mainly useless
 - there are some dev tools, need to explore
 - Svelte has a special tag to help   `{@debug var1, var2}`

### Sometimes you just want to access the file system

 - write a prebuild script and use Node.fs to pregenerate some data
 - or crazy adapter stuff

