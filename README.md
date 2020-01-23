# CRYPTO-LISTER

## Project Description

Crypto-Lister is a project that shows the various crypto currency details.
It has 3 views:

1.  List view - get a paginated view of over 5000 crypto currencies
2.  Comparision view - compare the prices of two crypto currencies over the last 24 hours
3.  Price view - view the price fluctuation of a crypto currency over last 24 hours

## Technologies Used

The following technologies are used in this project

1.  Angular
2.  Material Design for Bootstrap - we have used it for charts
3.  Bootstrap - for various style classes
4.  CoinGecko - used for getting data of cryptocurrency

## Github Link

https://github.com/prabhat933/crypto-lister

## Project Hosting Url

## Additional Features

This project has following additional feature(s):

1.  "favorite" badge in green color to selected crypto currency.
    This helps in visual identification of our favorite cryptocurrency.

## Deviation From Given Specification

I tried to fulfil all the specifications of the project. Some deviations are:

1.  Instead of
    ​https://coinmarketcap.com/api/, I have used https://www.coingecko.com/api/
    as I could not find a free version of coinmarketcap.
2.  I could not think of a good way to implement filtering based on price range
    and market cap range. These values lied between very small fractional values
    to very very large values. Representing them on a small slider was difficult
    for me.
3.  Instead of opening **Price Chart View** on clicking anywhere on the row, I designed
    it to work on clicking on the crypto currency name (which I designed to be a link)
4.  Also, instead of making check boxes appear on long press on a row, I designed the
    checkboxes to be always present. Whenever you select:
    a. One or more checkbox, _Mark as favorite_ button appears
    b. Exactly two checkboxes, _Compare_ button appears.
