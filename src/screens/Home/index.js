import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BannerCarousel, CategoryCard, Container, Header, ImageView, ProductCard, RowView, SearchBar, SizedBox, Text } from '../../components'
import { styles } from './index.styles'
import { navigate } from '../../navigation/service'
import { profile_icon } from '../../assets/icons'
import { COLORS, images, SIZES } from '../../constants'
import HomeFunctional from "./index.function"
import { SeeAllRow } from './components'
import { TextWeights } from '../../config'

const Home = () => {
    const {
        home_data,
        categories,
        user,
        latest_order,
        onPressOrder
    } = HomeFunctional()

    return (
        <Container>
            <Header
                leftIcon={profile_icon}
                onPressBack={() => navigate("AccountStack")}
                // title={"Discover"}
                name={`Hi, ${user?.firstName ?? "Guest"}`}
            />
            <View style={styles.main_view} >
                <ScrollView showsVerticalScrollIndicator={false} >

                    {/* <ImageView
                        height={SIZES.padding * 2}
                        width={"30%"} image={images.logo}
                        style={{
                            marginLeft: SIZES.padding
                        }}
                        resizeMode={'contain'}
                    /> */}

                    <SearchBar
                        style={styles.search_bar}
                        placeholder={"Search any product"}
                        editable={false}
                        onPress={() => navigate("SearchStack")}
                    />

                    <BannerCarousel imagesArray={home_data?.featuredSlider} />


                    <SeeAllRow
                        onPress={() => navigate("Categories")}
                        title={"All Categories"} />

                    <FlatList
                        numColumns={4}
                        data={categories}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: SIZES.padding }}
                        renderItem={({ item, index }) => {
                            return index < 8 && (
                                <TouchableOpacity
                                    onPress={() => navigate("SubCategories", { data: item })}
                                    style={{ width: "23%", marginTop: SIZES.padding2 }} activeOpacity={0.6} >
                                    <ImageView
                                        style={{ borderWidth: 1, borderColor: COLORS.background_grey_color, }}
                                        height={SIZES.padding * 3}
                                        width={"100%"}
                                        image={images.placeholder_image}
                                        radius={SIZES.padding2 / 2}
                                        url={item?.icon?.length > 0 ? item?.icon : null}
                                    />
                                    <Text
                                        text={item?.name}
                                        align={"center"}
                                        size={SIZES.h10}
                                        numberOfLines={2}
                                        mt={SIZES.padding2 / 3}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                    />


                    <FlatList
                        data={home_data?.categories}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item?.id}
                        ListFooterComponent={<SizedBox />}
                        renderItem={({ item, index }) => (
                            <CategoryCard item={item} />
                        )}
                    />

                    <SizedBox height={latest_order ? SIZES.padding * 2 : SIZES.padding} />




                </ScrollView>

                {
                    latest_order &&
                    <RowView onPress={onPressOrder} style={styles.bottom_order_view} >
                        <Text
                            color={COLORS.white}
                            weight={TextWeights.semibold}
                            text={"Order in Progress"}
                            size={SIZES.h15}
                        />
                        <Text
                            weight={TextWeights.medium}
                            color={COLORS.white} text={"View"} />
                    </RowView>
                }
            </View>
        </Container>
    )
}

export default Home