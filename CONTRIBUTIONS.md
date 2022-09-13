# Contribution guide

Want to help improve this repository? Great! Now, which side of this repo do you want to help out with:

- [Content creation](#content-creation)
- [Web development](#web-development)
- [Something else](#something-else)

## Content creation

Before you can start playing around with content, you need to understand the various sections within this site's content hierarchy. Sections are defined as either a _topbar section_, a _sidebar section_, or a _sidebar item_. Sidebar items are also called _pages_:

![A screenshot of the FVM docs highlighting different sections.](./images/section-hierarch.png)

The same hierarchy can be seen in a page's URL:

```plaintext
                        TOPBAR SECTION   SIDEBAR ITEM/PAGE
                             _|____          _|____
                            |      |        |      |
http://fvm.filecoin.io/docs/concepts/basics/overview/
                       |__|          |____|       
                        |             |   
                  CONTENT ROOT    SIDEBAR SECTION
```

Topbar sections just act as holders for sub-content. There is no information listed in topbar section folders other than a placeholder `_index.md` file, which tells Hugo which folders are topbar sections.

```plaintext
concepts  <------------ TOPBAR SECTION
├── actors
│   ├── definitions
│   │   └── index.md
│   └── _index.md
├── basics
│   ├── _index.md
│   └── overview
│       └── index.md
```

Sidebar sections perform in a similar way to topbar sections; they just act as holders for sub-content.

```plaintext
concepts
├── actors  <---------- SIDEBAR SECTION
│   ├── definitions
│   │   └── index.md
│   └── _index.md
├── basics  <---------- SIDEBAR SECTION
│   ├── _index.md
│   └── overview
│       └── index.md
```

Sidebar items, or pages, are special folders that contain an `_index.md` file and any images that you want to show on a page. All the content you see is found within these `.md` files.

Each of the following steps assumes that you have cloned this repository and moved into the subsequent `fvm-docs` folder.

### Topbar section

Take care when creating or editing topbar sections. These sections are incredibly important as the entire site is based on what these sections are called.

1. Decide what you are going to call this new topbar section.
1. Use `npm run create` to make a new topbar section:

    ```shell
    npm run create -- --kind topbar-section $NAME
    ```

    Replace `$NAME` with the name of your new topbar section.

1. Add this new item to the topbar menu by editing `/config/_default/menus/menus.en.toml` and adding the following:

    ```toml
    [[main]]
      name = "$NAME"
      url = "/$LOWERCASE_NAME/"
      weight = 10
    ```

    a. Replace `$NAME` with the name you chose for your topbar section, capitalizing the first letter only. 
    a. Replace `$LOWERCASE_NAME` with the same name, but entirely in lower-case. This is to match the folder hierarchy in `/content/en/`.
    a. Modify the weight to move this topbar section across the topbar navigation. The higher the number, the further right the section will move (lower down the menu on mobile view).

1. Done.

### Sidebar section

1. Decide what you are going to call this sidebar section and which topbar section it's going to fall under.
1. Use `npm run create` to make a new sidebar section, slotting in the topbar section you want to use and the name of the sidebar section:

    ```shell
    npm run create -- --kind sidebar-section $TOPBAR-SECTION/$SIDEBAR-SECTION
    ```

    Replace `$TOPBAR-SECTION` and `$SIDEBAR-SECTION` with the relevant information in lower case. For example:

    ```shell
    npm run create -- --kind sidebar section concepts/basics
    ```

1. Done.

### Sidebar item

When adding a new page, you must decide the name of the page and which topbar section and sidebar section the page goes into.

1. Use `npm run create` to make a new sidebar item, slotting in the relevant topbar and sidebar sections, along with the name of the sidebar item:

    ```shell
    npm run create -- --kind sidebar-item $TOPBAR-SECTION/$SIDEBAR-SECTION/$SIDEBAR-ITEM
    ```

    Replace `$TOPBAR-SECTION`, `$SIDEBAR-SECTION`, and `$SIDEBAR-ITEM` with the relevant information in lower case. For example:

    ```shell
    npm run create -- --kind sidebar section concepts/basics/overview
    ```

1. Done

### Images

To add images to a page, move the images into that page's folder and reference them using standard markdown syntax. For example, if you want to add an image called `dog.png` to the `/concepts/basics/overview` page, you must move the image into `/concepts/en/concepts/basics/overview`:

```plaintext
concepts
├── basics
│   ├── _index.md
│   └── overview
│       ├── index.md
│       └── dog.png
```

Then, reference the `dog.png` file within the `index.md` file:

```markdown
...

## Basics

In this basics section, you'll learn the fundamentals of how to Filecoin Virtual Machine works and how you can interact with it.

![](./dog.png)

...
```

Hugo will automatically compress and optimize the image when the site is built.

### Internal links

Lorem.

### Sidebar navigation

Lorem.

### Test locally

Check out the [Getting started section](./README.md#getting-started) of the `README.md` file to find out how to spin up a local copy of this site.

## Web development

So you want to help build the docs site? Great! Read through this section to get an idea of how the site is built and designed.

