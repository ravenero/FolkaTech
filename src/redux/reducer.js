import {combineReducers} from 'redux';

const initialProductReducer = [];
const initialBannerReducer = [
  {
    id: 1,
    img: require('../assets/img/banner/2.png'),
  },
  {
    id: 2,
    img: require('../assets/img/banner/1.png'),
  },
  {
    id: 3,
    img: require('../assets/img/banner/3.png'),
  },
  {
    id: 4,
    img: require('../assets/img/banner/4.png'),
  },
  {
    id: 5,
    img: require('../assets/img/banner/5.png'),
  },
];

const productReducer = (state = initialProductReducer, action) => {
  if (action.type == 'SET_PRODUCT') {
    return action.value;
  }

  return state;
};

const bannerReducer = (state = initialBannerReducer, action) => {
  if (action.type == 'SET_BANNER') {
    return action.value;
  }

  return state;
};

const reducer = combineReducers({
  productReducer,
  bannerReducer,
});

export default reducer;
