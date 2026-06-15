const INITIAL_STATE = {
  sections: [
    {
      title: 'All Occasions',
      imgUrl:
        'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/phaelenopsis-orchid-garden_seodpx.png',
      id: 1,
      linkUrl: 'shop/all-occasions',
    },
    {
      title: 'Bridal',
      imgUrl:
        'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/metropolitan-design_fashox.png',
      id: 2,
      linkUrl: 'shop/bridal',
    },
    {
      title: 'Holidays',
      imgUrl:
        'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/citys-tulips-design_nqwe7c.png',
      id: 3,
      linkUrl: 'shop/holidays',
    },
    {
      title: 'Well Wishes',
      imgUrl:
        'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003846/arrangements/asymmetric-centerpiece-design_anphoq.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/well-wishes',
    },
    {
      title: 'Deals',
      imgUrl:
        'https://res.cloudinary.com/dgdnpkfun/image/upload/v1656003850/arrangements/masculine-fathers-day_gnl5x6.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/deals',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
