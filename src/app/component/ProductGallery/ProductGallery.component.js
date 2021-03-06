import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MediaType } from 'Type/ProductList';
import Slider from 'Component/Slider';
import './ProductGallery.style';

const PRODUCT_IMAGE_PATH = 'catalog/product';

/**
 * Product gallery
 * @class ProductGallery
 */
class ProductGallery extends Component {
    render() {
        const { mediaGallery, thumbnail, areDetailsLoaded } = this.props;

        // use images from gallery or fallback to thumbnail
        const gallery = mediaGallery.length
            ? mediaGallery.map(media => ({ id: media.id, image: `jpg/${PRODUCT_IMAGE_PATH}${media.file}` }))
            : [{ image: thumbnail && `jpg/${PRODUCT_IMAGE_PATH}${thumbnail}`, id: 'thumbnail' }];

        return (
            <Slider
              block="ProductGallery"
              items={ gallery }
              areArrowButtonsShown={ areDetailsLoaded }
              arePlaceholdersShown={ !areDetailsLoaded }
              areThumbnailsShown
              isKeyboardAllowed
              slideSpeed={ 600 }
            />
        );
    }
}

ProductGallery.propTypes = {
    mediaGallery: MediaType,
    thumbnail: PropTypes.string,
    areDetailsLoaded: PropTypes.bool.isRequired
};

ProductGallery.defaultProps = {
    mediaGallery: [],
    thumbnail: ''
};

export default ProductGallery;
