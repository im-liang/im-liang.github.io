# Git Commit Message Style Guide

```
          |---- header
commit ---|---- content
          |---- footer
```

## Header

header -> {type} + {ticket id}} + ":" + {subject}

### Type

**feature**: new feature  
**fix**: bug fix  
**doc**: changes in documentation  
**refactor**: refactor code base  
**test**: changes on test case(ex. add tests, refactor tests)  
**build**: update configs  

### Subject

present tense, capitalize word

## Content

* (optional)
* have a blank line between header and content

## Footer

* (optional)
* reference other relevant ticket id

## Example

```git
feature #99: Concise Title

More detailed explanatory text, if necessary.

See also: #66, #88
```
