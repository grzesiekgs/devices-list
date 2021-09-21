# Instruction

If You are using `nvm` [(Node Version Manager)](https://github.com/nvm-sh/nvm), You can run `nvm use` to get the very same version of node that I was working on (v16.6.1).

In order to run application, execute `npm run dev`, it will launch server in dev mode, under `localhost:3000`.

# About

## Technologies

As requested - I've created application using `react` and `redux`.\
In addition to that, I've added `react-redux`, `redux-sagas` and `reduxsauce` (toolkit for redux).\
Everything is based on `next.js`, just to provide quick setup for bundling etc.

Styling is achieved via `scss` modules using built in `next.js` support. I am using "pseudo-BEM" to avoid index notation `Styles['block__element--modifier]` -> `Styles.block__element_modifier`.\
I was doing everything by hand from scratch! No css frameworks or component librariers. This is how I am working most of the time, an I wanted to show You that I am capable developer (no fireworks tho).

In order to setup project, I've used my own boilerplate which contains mentioned technologies. (let me know if You would like to have on that boilerplate).

## Justification

The goal was to use `react` and `redux` but I knew that I have already working boilerplate with few additions, therefore I've decided to go with it.\
I decided to use my boilerplate mostly because I didn't want to put much time into application setup, but afterall, it didn't work :sweat_smile: (more on that on first point of #Development timeline).

I knew that You are using `redux-saga`, so I wanted to show that I'm familiar with it.\
I've used `reduxsauce` because it was in boilerplate, and I was using it in the past. Lately I am using `redux-toolkit` but I would say that it has more complicated boilerplate, therefore I didn't include it.\

## Folder structure

- `public` - used by `next.js` to host assets, I am using it to expose `devices-data.json` to `fetch`.
- `pages` - used by `next.js`. Each component in this folder, will create appropriate route in application. I am using only `index` page (`pages/index.tsx`).
- `logic` - includes all redux logic.
- `types` - includes global types defined for application.
- `src/components` - includes all used components, everything is reexported via `src/components/index.ts` for easier absolute import.
- `src/utils` - includes utils like className helpers or hooks.
- `src/styles` - includes global styles and style variables.

# Redux store structure

App is using two store fragments:

- `devices` - list of all devices.
- `aisles` - list of all aisles to which devices are assigned.

I was not sure what are the constrains, so I created my own.
I've assumed that list of devices contains all existing aisles, therefore I've extracted these from json data.
Have a look at `logic/devices/saga`.

`devices` store fragment is split into two parts, list of all devices ids, and map of all devices.\
I think that such approach is cool, because we have list of all id's, while we do not have to search whole devices list in order to find one device data.\
Anyway, this approach doesn't shine in such simple application, so simple list of devices would do aswell.

In reality, I would use some identifier for both, aisles and devices, but test data doesn't include these, and I didn't want to make up my own, therefore I've used device/aisle name as identifiers.

# Development timeline

Every step, has reflection in commit (more or less) so have a look at commits list please.\
I was working on that project for two days, on first day I've added most of logic, on second day I was mostly working on styles.

I was taking 16-20 minutes breaks every 1.5-2 hours.

1. **Initial setup [~1.5 hours]**\
   As mentioned in #Justification I had some problems with application setup.\

   I've used my existing boilerplate, but before using it, I've bumped all dependencies to latest version, as I haven't updated this boilerplate for quite a while.\
   Also, all my latest project which based on that boilerplate, didn't include `redux`, just because I didn't need it (or wanted to try something else).\
   Therefore, I had to make some integration changes before starting new repo, but it took me around 15 minutes and seemed ok, so I've forked boilerplate and created repositiory.

   At first, I had a look at provided json data, and I modified it a bit. I've replaced snake_case properties with camelCase, just to make things easier while working.\
   In "normal" project, I would use some kind of response mapping at `fetch` level, in order to deal with such things.\
   In addition to that, I've created TS interfaces based on example data (`types/devices.ts`).

   After creating first store fragment, actions, saga, and API mock, I realized that something is not working as expected.\
   My sagas were working ok, as long as I had only one `yield`.
   I haven't been working with sagas for quite some time (around 2 years), so I was thinking that maybe I just forgot how to use these.\
   Therefore I had a look on sagas API, and also look on `reduxsauce` API just to make sure that I've setup everything as expected.

   Things still didn't work :sob:

   After additional digging I've realized that `next.js` requires some additional setup for sagas, and I have to wait for `sagas/END` redux action in order to make things work.
   Have a look at `pages/index.ts:getServerSideProps` to check how it's done.

   This was a bit of failure, because I most likely wouldn't decide to use that boilerplate and sagas, if I would know that additional setup will take me so much time.

2. **Simple list of devices [~15 minutes]**\
   This one was quick, as I just had to crete simple list component, device tiles and connect everything to store.\
   Since this moment, I was basically not touching redux, most of work was with components.\
   While creating new components, I was adding only very simple styling.\

3. **Complete list of devices with device details modal [~30 minutes]**\
   I've continued work on main devices list, but I didn't finish it's styling. As next step I was working on device details modal.

4. **Full support for filters, basic support for adding new device [~2 - 2.5 hours]**\
   At this point, I've added most of functionality, but application had very few styles.\
   I've refactored small part of code as I didn't like how I structurized `DevicesCatalog`.\

   Also _a bit of overengineering happend at this point_. IMO I've spent a bit too much time on hooks for `FiltersBar` (see `src/utils/hooks.ts`).\
   My intention was to show You that I know how to handle things and that I am aware what is, and what is not causing rerenders while dealing with hooks.\
   The goal that I've set for myself, has been achieved (sibling components doesn't rerender when only part of filters state changes), but I am aware, that in such simple application, it wouldn't hurt if these components would have few wasted renders.\

   Same goes with extensive use of `useCallback` in some components. I know that these are not necessary in such simple application.\
   I did that just to prove my knowledge of react & hooks.

5. **Next day. Few new base components, and finishing touches for add new device feature. [~1.5 - 2 hours]**\
   Major styling improvements for all components which haven't been touched much till now.\
   Finished modal with add new device feature.

6. **Boilerplate cleanup and this documentation [~30-40 minutes]**\
   I've removed all the code which was in boilerplate, but I didn't need it (few utils and stuff).\
   Also created this list, which hopefully will be helpful
