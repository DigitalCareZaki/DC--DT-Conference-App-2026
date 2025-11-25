import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../../redux/actions/main-action';
import { COLORS, SIZES } from '../../../constants';
import { ImageView } from '../../../components';
import FastImage from 'react-native-fast-image';

const BannerView = () => {
    const dispatch = useDispatch()
    const flatListRef = useRef(null);

    const { banners } = useSelector(state => state.main)

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        dispatch(getBanners());
    }, []);

    const onScroll = e => {
        const x = e.nativeEvent.contentOffset.x;
        const newIndex = Math.round(x / (SIZES.width * 0.87));
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    };

    // 🔥 Auto Scroll Logic — every 5 seconds
    useEffect(() => {
        if (!banners || banners.length === 0) return;

        const timer = setInterval(() => {
            let nextIndex = activeIndex + 1;

            if (nextIndex >= banners.length) {
                nextIndex = 0; // loop back to start
            }

            setActiveIndex(nextIndex);

            flatListRef.current?.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [activeIndex, banners]);

    return (
        <View style={styles.imageWrapper}>
            <FlatList
                ref={flatListRef}
                data={banners}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                onScroll={onScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item }) => {
                    return (
                        <ImageView
                            url={item?.media}
                            width={SIZES.width * 0.87}
                            height={SIZES.padding * 8}
                            resizeMode={FastImage.resizeMode.cover}
                            radius={SIZES.padding2}
                        />
                    );
                }}
            />

            <View style={styles.dotsOverlay}>
                {banners?.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === activeIndex ? styles.dotActive : styles.dotInactive,
                        ]}
                    />
                ))}
            </View>
        </View>
    )
}

export default BannerView

const styles = StyleSheet.create({
    imageWrapper: {
        position: 'relative',
    },
    dotsOverlay: {
        position: 'absolute',
        bottom: SIZES.padding2 - 2,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SIZES.padding2 * 0.5,
    },
    dot: {
        width: SIZES.padding2,
        height: SIZES.padding2 - 6,
        borderRadius: SIZES.padding2 / 2,
        marginHorizontal: SIZES.radius_sm,
    },
    dotActive: {
        backgroundColor: COLORS.primary,
        width: SIZES.padding,
    },
    dotInactive: {
        backgroundColor: COLORS.background_grey_color,
    },
})
