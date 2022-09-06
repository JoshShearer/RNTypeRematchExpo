import React, { useEffect } from 'react';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import tw from 'twrnc';



const defaultProps = {
  idKey: 'default',
} as {
  idKey?: string;
  children?: JSX.Element;
};
// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_layout_twDemo = (_props: typeof defaultProps) => {
  const props = { ...defaultProps, ..._props };

  
  // useEffect(() => {
    
  // },[]);

  // const selected = useSelector((state) => selector(state, props));

  // const selected = useSelector(
  //   (rootState: RootState) => rootState.model.statevar //capturing state slice (not internal selector)
  // );
  // const selected = useSelector(store.select.model.selectorFunction); //using state and selector (internal selector function)
  const incentives = [
    {
      name: 'Free shipping',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
      name: '10-year warranty',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
      name: 'Exchanges',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:
        "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
  ]

  return (
    <View style={tw`bg-gray-50"`}>
      <View style={tw`mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4"`}>
        <View style={tw`mx-auto max-w-2xl px-4 lg:max-w-none"`}>
          <View style={tw`grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2"`}>
            <View>
              <Text style={tw`text-4xl font-bold tracking-tight text-gray-900"`}>
                We built our business on great customer service
              </Text>
              <Text style={tw`mt-4 text-gray-500"`}>
                At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                caring about that. Our new strategy is to write a bunch of things that look really good in the
                headlines, then clarify in the small print but hope people don't actually read it.
              </Text>
            </View>
            <View style={tw`aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100`}>
              <Image
                source={{uri: 'https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg',}}
                style={tw`object-cover object-center`}
              />
            </View>
          </View>
          <View style={tw`mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3"`}>
            {incentives.map((incentive) => (
              <View key={incentive.name} style={tw`sm:flex lg:block"`}>
                <View style={tw`sm:flex-shrink-0`}>
                  <Image style={tw`h-16 w-16`} source={{uri: incentive.imageSrc,}}  />
                </View>
                <View style={tw`mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0`}>
                  <Text style={tw`text-sm font-medium text-gray-900`}>{incentive.name}</Text>
                  <Text style={tw`mt-2 text-sm text-gray-500`}>{incentive.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};


// export class Comps_layout\twDemo extends React.PureComponent<Props> {
// 	render() {
// 		const { countState } = this.props
// 		return <View>Comps_layout\twDemo</View>
// 	}
// }

// const selection = store.select((models) => ({
//   total: models.cart.total,
//   eligibleItems: models.cart.wouldGetFreeShipping,
// }));

 