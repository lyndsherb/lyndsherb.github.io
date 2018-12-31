const base = {
    texas: 'rgb(13, 27, 42)',
    wyoming: 'rgb(232, 232, 232)',
    wash: 'rgb(147, 163, 177)',
    tucker: 'rgb(17, 157, 164)',
    simmons: 'rgb(179, 9, 75)',

    // Secondary
    meta: 'rgb(247, 247, 247)',
    carolina: 'rgb(12, 113, 118)',
    caboose: 'rgb(9, 93, 179)',
    donut: 'rgb(249, 174, 203)',
};

const Colours = {
    // Colour defaults - Text
    text: base.texas,
    hyperlink: base.tucker,
    hyperlinkHover: base.carolina,

    // Colour defaults - Background
    bodyBg: base.meta,

    // Colour defaults - Drop shadow
    shadowDefault: `rgba(${base.texas}, 0.4)`,
    shadowLight: `rgba(${base.wash}, 0.4)`,

    // Colour defaults - Icon
    iconDefault: `rgba(${base.texas}, 0.75)`,

    // Colour defaults - Buttons
    // Primary
    btnPrimaryTextDefault: base.meta,
    btnPrimaryBgDefault: base.tucker,
    btnPrimaryBorderDefault: base.tucker,
    btnPrimaryBgHover: base.carolina,
    btnPrimaryBorderHover: base.carolina,
    btnPrimaryTextHover: base.meta,

    // Secondary
    btnSecondaryBgDefault: 'transparent',
    btnSecondaryBorderDefault: base.simmons,
    btnSecondaryTextDefault: base.simmons,
    btnSecondaryBgHover: base.simmons,
    btnSecondaryTextHover: base.meta,

    // navigation
    navBorderDefault: 'transparent',
    navItemActive: base.tucker,
    navBorderHover: base.tucker,
    navItem: base.texas,

    // header
    headerBg: base.tucker,
    headerShadow: base.wash,
    headerText: base.meta,

    // footer
    footerText: base.wash,
    footerBg: base.wyoming,

    // sections
    containerIntroBg: `rgba(${base.wyoming}, 0.2)`,
    containerSocialBg: `rgba(${base.wyoming}, 0.4)`,
};

export default Colours;
