import React, { Component } from 'react';
import '../styles/MyNavbar.css';

class MyNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="navbar-main" className=" nav-opt-sprite nav-flex nav-locale-us nav-lang-en nav-ssl nav-unrec nav-progressive-attribute">
                <div id="navbar" cel_widget_id="Navigation-desktop-navbar" data-template="layoutSwapToolBar" role="navigation" className=" nav-sprite-v1 celwidget nav-bluebeacon nav-a11y-t1 bold-focus-hover layout2 nav-flex layout3 layout3-alt nav-packard-glow hamburger nav-progressive-attribute using-mouse " data-csa-c-id="3tceag-e4gqsb-wx876z-61y3s5">
                    <div id="nav-belt">
                        <div className="nav-left">
                            <div id="nav-logo">
                                <a href="/" id="nav-logo-sprites" className="nav-logo-link nav-progressive-attribute" aria-label="Amazon">
                                    <span className="nav-sprite nav-logo-base" />
                                    <span id="logo-ext" className="nav-sprite nav-logo-ext nav-progressive-content" />
                                    <span className="nav-logo-locale">.us</span>
                                </a>
                            </div>
                            <div id="nav-global-location-slot">
                                <span id="nav-global-location-data-modal-action" className="a-declarative nav-progressive-attribute" data-a-modal="{&quot;width&quot;:375, &quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;Choose your location&quot;, &quot;ajaxHeaders&quot;:{&quot;anti-csrftoken-a2z&quot;:&quot;gKZYo7YOvWPXeIYzeXJQ0me2q8yxDzWiwyUpZvIAAAAMAAAAAGCncxZyYXcAAAAA&quot;}, &quot;name&quot;:&quot;glow-modal&quot;, &quot;url&quot;:&quot;/gp/glow/get-address-selections.html?deviceType=desktop&pageType=Gateway&storeContext=NoStoreName&actionSource=desktop-modal&quot;, &quot;footer&quot;:&quot;<span class=\&quot;a-declarative\&quot; data-action=\&quot;a-popover-close\&quot; data-a-popover-close=\&quot;{}\&quot;><span class=\&quot;a-button a-button-primary\&quot;><span class=\&quot;a-button-inner\&quot;><button name=\&quot;glowDoneButton\&quot; class=\&quot;a-button-text\&quot; type=\&quot;button\&quot;>Done</button></span></span></span>&quot;,&quot;header&quot;:&quot;Choose your location&quot;}" data-action="a-modal">
                                    <a href="/" id="nav-global-location-popover-link" className="nav-a nav-a-2 a-popover-trigger a-declarative nav-progressive-attribute" tabIndex={0}>
                                        <div className="nav-sprite nav-progressive-attribute" id="nav-packard-glow-loc-icon" />
                                        <div id="glow-ingress-block">
                                            <span className="nav-line-1 nav-progressive-content" id="glow-ingress-line1">
                                                Deliver to
                                            </span>
                                            <span className="nav-line-2 nav-progressive-content" id="glow-ingress-line2">
                                                United Kingdom
                                            </span>
                                        </div>
                                    </a>
                                </span>
                                <input data-addnewaddress="add-new" id="unifiedLocation1ClickAddress" name="dropdown-selection" type="hidden" defaultValue="add-new" className="nav-progressive-attribute" />
                                <input data-addnewaddress="add-new" id="ubbShipTo" name="dropdown-selection-ubb" type="hidden" defaultValue="add-new" className="nav-progressive-attribute" />
                                <input id="glowValidationToken" name="glow-validation-token" type="hidden" defaultValue="gKZYo7YOvWPXeIYzeXJQ0me2q8yxDzWiwyUpZvIAAAAMAAAAAGCncxZyYXcAAAAA" className="nav-progressive-attribute" />
                            </div>
                            <div id="nav-global-location-toaster-script-container" className="nav-progressive-content" />
                        </div>
                        <div className="nav-fill">
                            <div id="nav-search">
                                <div id="nav-bar-left" />
                                <form id="nav-search-bar-form" acceptCharset="utf-8" action="/s/ref=nb_sb_noss" className="nav-searchbar nav-progressive-attribute" method="GET" name="site-search" role="search">
                                    <div className="nav-left">
                                        <div id="nav-search-dropdown-card">
                                            <div className="nav-search-scope nav-sprite">
                                                <div className="nav-search-facade" data-value="search-alias=aps">
                                                    <span id="nav-search-label-id" className="nav-search-label nav-progressive-content" style={{ width: 'auto' }}>All</span>
                                                    <i className="nav-icon" />
                                                </div>
                                                <span id="searchDropdownDescription" className="nav-progressive-attribute" style={{ display: 'none' }}>Select the department you want to search in</span>
                                                <select aria-describedby="searchDropdownDescription" className=" nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown " data-nav-digest="Xa0GQ+pPQ/tdsV+GmRWeXB8PUD0=" data-nav-selected={0} id="searchDropdownBox" name="url" style={{ display: 'block', top: '2.5px' }} tabIndex={0} title="Search in">
                                                    <option selected="selected" value="search-alias=aps">
                                                        All Departments
                                                    </option>
                                                    <option value="search-alias=arts-crafts-intl-ship">
                                                        Arts &amp; Crafts
                                                    </option>
                                                    <option value="search-alias=automotive-intl-ship">
                                                        Automotive
                                                    </option>
                                                    <option value="search-alias=baby-products-intl-ship">
                                                        Baby
                                                    </option>
                                                    <option value="search-alias=beauty-intl-ship">
                                                        Beauty &amp; Personal Care
                                                    </option>
                                                    <option value="search-alias=stripbooks-intl-ship">
                                                        Books
                                                    </option>
                                                    <option value="search-alias=computers-intl-ship">
                                                        Computers
                                                    </option>
                                                    <option value="search-alias=digital-music">
                                                        Digital Music
                                                    </option>
                                                    <option value="search-alias=electronics-intl-ship">
                                                        Electronics
                                                    </option>
                                                    <option value="search-alias=digital-text">
                                                        Kindle Store
                                                    </option>
                                                    <option value="search-alias=instant-video">
                                                        Prime Video
                                                    </option>
                                                    <option value="search-alias=fashion-womens-intl-ship">
                                                        Women's Fashion
                                                    </option>
                                                    <option value="search-alias=fashion-mens-intl-ship">
                                                        Men's Fashion
                                                    </option>
                                                    <option value="search-alias=fashion-girls-intl-ship">
                                                        Girls' Fashion
                                                    </option>
                                                    <option value="search-alias=fashion-boys-intl-ship">
                                                        Boys' Fashion
                                                    </option>
                                                    <option value="search-alias=deals-intl-ship">
                                                        Deals
                                                    </option>
                                                    <option value="search-alias=hpc-intl-ship">
                                                        Health &amp; Household
                                                    </option>
                                                    <option value="search-alias=kitchen-intl-ship">
                                                        Home &amp; Kitchen
                                                    </option>
                                                    <option value="search-alias=industrial-intl-ship">
                                                        Industrial &amp; Scientific
                                                    </option>
                                                    <option value="search-alias=luggage-intl-ship">
                                                        Luggage
                                                    </option>
                                                    <option value="search-alias=movies-tv-intl-ship">
                                                        Movies &amp; TV
                                                    </option>
                                                    <option value="search-alias=music-intl-ship">
                                                        Music, CDs &amp; Vinyl
                                                    </option>
                                                    <option value="search-alias=pets-intl-ship">
                                                        Pet Supplies
                                                    </option>
                                                    <option value="search-alias=software-intl-ship">
                                                        Software
                                                    </option>
                                                    <option value="search-alias=sporting-intl-ship">
                                                        Sports &amp; Outdoors
                                                    </option>
                                                    <option value="search-alias=tools-intl-ship">
                                                        Tools &amp; Home Improvement
                                                    </option>
                                                    <option value="search-alias=toys-and-games-intl-ship">
                                                        Toys &amp; Games
                                                    </option>
                                                    <option value="search-alias=videogames-intl-ship">
                                                        Video Games
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-fill">
                                        <div className="nav-search-field">
                                            <input type="text" id="twotabsearchtextbox" name="field-keywords" autoComplete="off" className="nav-input nav-progressive-attribute" dir="auto" tabIndex={0} aria-label="Search" />
                                        </div>
                                        <div id="nav-iss-attach" />
                                    </div>
                                    <div className="nav-right">
                                        <div className="nav-search-submit nav-sprite">
                                            <span id="nav-search-submit-text" className=" nav-search-submit-text nav-sprite nav-progressive-attribute " aria-label="Go">
                                                <input id="nav-search-submit-button" type="submit" className="nav-input nav-progressive-attribute" defaultValue="Go" tabIndex={0} />
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="nav-right">
                            <div id="nav-tools" className="layoutToolbarPadding">
                                <a href="/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2F" id="icp-nav-flyout" className="nav-a nav-a-2 icp-link-style-2" aria-label="Choose a language for shopping.">
                                    <span className="icp-nav-link-inner">
                                        <span className="nav-line-1"> </span>
                                        <span className="nav-line-2">
                                            <span className="icp-nav-flag icp-nav-flag-us" />
                                            <span className="nav-icon nav-arrow null" style={{ visibility: 'visible' }} />
                                        </span>
                                    </span>
                                </a>
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" className="nav-a nav-a-2 nav-progressive-attribute" data-nav-ref="nav_ya_signin" data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-accountList" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav-link-accountList" data-csa-c-content-id="nav_ya_signin" data-csa-c-id="ofeccy-n21391-aznal4-dzzf65">
                                    <div className="nav-line-1-container">
                                        <span id="nav-link-accountList-nav-line-1" className="nav-line-1 nav-progressive-content">Hello, Sign in</span>
                                    </div>
                                    <span className="nav-line-2 nav-long-width">Account &amp; Lists<span className="nav-icon nav-arrow null" style={{ visibility: 'visible' }} />
                                    </span>
                                    <span className="nav-line-2 nav-short-width">
                                        Account
                                    <span className="nav-icon nav-arrow null" style={{ visibility: 'visible' }} />
                                    </span>
                                </a>
                                <a href="/gp/css/order-history?ref_=nav_orders_first" className="nav-a nav-a-2 nav-progressive-attribute" id="nav-orders" tabIndex={0}>
                                    <span className="nav-line-1">Returns</span>
                                    <span className="nav-line-2">&amp; Orders</span>
                                </a>
                                <a href="/gp/cart/view.html?ref_=nav_cart" aria-label="0 items in cart" className="nav-a nav-a-2 nav-progressive-attribute" id="nav-cart">
                                    <div id="nav-cart-count-container">
                                        <span id="nav-cart-count" aria-hidden="true" className=" nav-cart-count nav-cart-0 nav-progressive-attribute nav-progressive-content ">0</span>
                                        <span className="nav-cart-icon nav-sprite" />
                                    </div>
                                    <div id="nav-cart-text-container" className="nav-progressive-attribute">
                                        <span aria-hidden="true" className="nav-line-1"> </span>
                                        <span aria-hidden="true" className="nav-line-2">
                                            Cart
                                        <span className="nav-icon nav-arrow" />
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="nav-flyout-iss-anchor">
                        <div id="nav-flyout-searchAjax" className="nav-issFlyout nav-flyout">
                            <div className="nav-template nav-flyout-content" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                    </div>
                    <div id="nav-flyout-anchor">
                        <div id="nav-flyout-prime" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-accountList" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content">
                                <div id="nav-al-container">
                                    <div id="nav-al-signin">
                                        <div id="nav-flyout-ya-signin" className="nav-flyout-content nav-flyout-accessibility">
                                            <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" rel="nofollow" className="nav-action-button" data-nav-role="signin" data-nav-ref="nav_signin"><span className="nav-action-inner">Sign in</span></a>
                                            <div id="nav-flyout-ya-newCust" className=" nav_pop_new_cust nav-flyout-content nav-flyout-accessibility ">
                                                New customer?
                                            <a href="https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" rel="nofollow" className="nav-a">Start here.</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nav-al-wishlist" className=" nav-al-column nav-tpl-itemList nav-flyout-content nav-flyout-accessibility ">
                                        <div className="nav-title" id="nav-al-title">Your Lists</div>
                                        <a href="/gp/registry/wishlist?triggerElementID=createList&ref_=nav_ListFlyout_create" className="nav-link nav-item"><span className="nav-text">Create a List</span></a>
                                        <a href="/gp/registry/search?ref_=nav_ListFlyout_find" className="nav-link nav-item"><span className="nav-text">Find a List or Registry</span></a>
                                        <a href="/gp/clpf?ref_=nav_ListFlyout_smi_se_ya_lll_ll" className="nav-link nav-item"><span className="nav-text">AmazonSmile Charity Lists</span></a>
                                    </div>
                                    <div id="nav-al-your-account" className=" nav-al-column nav-template nav-flyout-content nav-tpl-itemList nav-flyout-accessibility ">
                                        <div className="nav-title">Your Account</div>
                                        <a href="/gp/css/homepage.html?ref_=nav_AccountFlyout_ya" className="nav-link nav-item"><span className="nav-text">Account</span></a>
                                        <a id="nav_prefetch_yourorders" href="/gp/css/order-history?ref_=nav_AccountFlyout_orders" className="nav-link nav-item"><span className="nav-text">Orders</span></a>
                                        <a href="/gp/yourstore?ref_=nav_AccountFlyout_recs" className="nav-link nav-item"><span className="nav-text">Recommendations</span></a>
                                        <a href="/gp/history?ref_=nav_AccountFlyout_browsinghistory" className="nav-link nav-item"><span className="nav-text">Browsing History</span></a>
                                        <a href="/gp/video/watchlist?ref_=nav_AccountFlyout_ywl" className="nav-link nav-item"><span className="nav-text">Watchlist</span></a>
                                        <a href="/gp/video/library?ref_=nav_AccountFlyout_yvl" className="nav-link nav-item"><span className="nav-text">Video Purchases &amp; Rentals</span></a>
                                        <a href="/gp/kindle/ku/ku_central?ref_=nav_AccountFlyout_ku" className="nav-link nav-item"><span className="nav-text">Kindle Unlimited</span></a>
                                        <a href="/hz/mycd/myx?ref_=nav_AccountFlyout_myk" className="nav-link nav-item"><span className="nav-text">Content &amp; Devices</span></a>
                                        <a href="/gp/subscribe-and-save/manager/viewsubscriptions?ref_=nav_AccountFlyout_sns" className="nav-link nav-item"><span className="nav-text">Subscribe &amp; Save Items</span></a>
                                        <a href="/hz5/yourmembershipsandsubscriptions?ref_=nav_AccountFlyout_digital_subscriptions" className="nav-link nav-item"><span className="nav-text">Memberships &amp; Subscriptions</span></a>
                                        <a href="/gp/dmusic/mp3/player?ref_=nav_AccountFlyout_cldplyr" className="nav-link nav-item"><span className="nav-text">Music Library</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-groceries" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-transientFlyout" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-fresh" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-abAcquisition" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-abActivation" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-abAccountLink" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div className="nav-signin-tt nav-flyout" style={{ display: 'none', position: 'absolute', top: '-5.01302px', left: '733.516px', opacity: 1 }}>
                            <div className="nav-arrow"><div className="nav-arrow-inner" /></div>
                            <div id="nav-signin-tooltip">
                                <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_custrec_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" className="nav-action-button" data-nav-role="signin" data-nav-ref="nav_custrec_signin"><span className="nav-action-inner">Sign in</span></a>
                                <div className="nav-signin-tooltip-footer">
                                    New customer?
            <a href="https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_custrec_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&" className="nav-a">Start here.</a>
                                </div>
                            </div>
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-icp" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                        <div id="nav-flyout-icp-footer-flyout" className="nav-coreFlyout nav-flyout">
                            <div className="nav-arrow null">
                                <div className="nav-arrow-inner" />
                            </div>
                            <div className="nav-template nav-flyout-content nav-spinner" />
                            <div className="nav-flyout-buffer-left" />
                            <div className="nav-flyout-buffer-right" />
                            <div className="nav-flyout-buffer-top" />
                            <div className="nav-flyout-buffer-bottom" />
                        </div>
                    </div>
                    <div id="nav-main" className="nav-sprite">
                        <div className="nav-left">
                            <a href="/" id="nav-hamburger-menu" role="button" aria-label="Open Menu" data-csa-c-type="widget" data-csa-c-slot-id="HamburgerMenuDesktop" data-csa-c-interaction-events="click" data-csa-c-id="ku1dx9-iqnqlz-frfwyn-autweh">
                                <i className="hm-icon nav-sprite" />
                                <span className="hm-icon-label">All</span>
                            </a>
                        </div>
                        <div className="nav-fill">
                            <div id="nav-shop" />
                            <div id="nav-xshop-container">
                                <div id="nav-xshop" className="nav-progressive-content">
                                    <a href="/" className="nav-a" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_0" data-csa-c-content-id="nav_cs_gb_intl_52df97a2eee74206a8343034e85cd058" data-csa-c-id="o47ckv-7dx0ba-av8qwb-tlu6vl">Today's Deals</a>
                                    <a href="/" className="nav-a" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_1" data-csa-c-content-id="nav_cs_customerservice_2bf4fe8c5ec54e6bae2d1c24043f012b" data-csa-c-id="nzuxft-vw3iat-fufrr0-y7zl2a">Customer Service</a>
                                    <a href="/" className="nav-a" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_2" data-csa-c-content-id="nav_cs_gc_4fb606b1a14b44e4823e00c03fc71f47" data-csa-c-id="4k6c2u-xd8iso-1ijm56-f288yy">Gift Cards</a>
                                    <a href="/" className="nav-a" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_3" data-csa-c-content-id="nav_cs_registry_1c421982e26d4ec48ca364be68f201b5" data-csa-c-id="lh3pj7-7mbvpd-byr211-ckczpj">Registry</a>
                                    <a href="/" className="nav-a" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_4" data-csa-c-content-id="nav_cs_sell_9321d964d1ab428b8d83e204c043fc01" data-csa-c-id="eiefff-vm999p-we1zkz-h3l1u5">Sell</a>
                                    {/* <a href="/" aria-label="Click to call our Disability Customer Support line, or reach us directly at 1-888-283-1678" className="nav-hidden-aria" tabIndex={0} data-csa-c-type="link" data-csa-c-slot-id="nav_cs_5" data-csa-c-id="j6aciv-pdkpqf-5ho0m3-4advd5">Disability Customer Support</a> */}
                                    <a href="/backoffice" className="nav-a">Back Office</a>
                                </div>
                            </div>
                        </div>
                        <div className="nav-right">
                            {/* Navyaan SWM */}
                            <div id="nav-swmslot" className="nav-swm-text-widget">
                                <a href="https://blog.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19/?_encoding=UTF8&token=GW&utm_content=COVID-19_roundup&utm_medium=swm&utm_source=gateway&utm_term=gw03162020&ref_=nav_swm_undefined&pf_rd_p=cf6260e5-93a9-45ad-9653-d1fc95751fac&pf_rd_s=nav-sitewide-msg-text-export&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=ZBBKPHYC1P4A38ZFRVB6" id="swm-link" className=" nav_a nav-swm-text nav-progressive-attribute nav-progressive-content " tabIndex={0}>Amazon's response to COVID-19</a>
                            </div>
                        </div>
                    </div>
                    <div id="nav-subnav-toaster" />
                    <div id="nav-progressive-subnav" />
                </div>
            </div>
        );
    }
}

export default MyNavbar;