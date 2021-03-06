import React, { Component } from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';
import './RangeSelector.style';

/**
 * Product Sort
 * @class ProductSort
 */
class RangeSelector extends Component {
    constructor() {
        super();

        this.state = {
            value: false
        };
    }

    /**
     * Toggle on range selection change
     * @param {Object} value sliders mix and max values
     * @return {void}
     */
    onChangeComplete(value) {
        const { onChangeComplete } = this.props;

        onChangeComplete(value);

        this.setState({ value: false });
    }

    /**
     * Get selected value
     * @return {Number}
     */
    getValue() {
        const { value: stateValue } = this.state;
        const { value } = this.props;
        const currentValue = stateValue || value;

        return this.limitValueToBounds(currentValue);
    }

    /**
     * Limit selected value to min and max bounds
     * @param {Object} value sliders mix and max values
     * @return {Number} value within bounds
     */
    limitValueToBounds(value) {
        const { minValue, maxValue } = this.props;
        const newValue = { ...value };

        if (newValue.max > maxValue) newValue.max = maxValue;
        if (newValue.min < minValue) newValue.min = minValue;

        return newValue;
    }

    render() {
        const { minValue, maxValue } = this.props;

        return (
          <InputRange
            minValue={ minValue }
            maxValue={ maxValue }
            value={ this.getValue() }
            onChangeComplete={ value => this.onChangeComplete(value) }
            onChange={ value => this.setState({ value }) }
          />
        );
    }
}

RangeSelector.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]).isRequired,
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    onChangeComplete: PropTypes.func.isRequired
};

export default RangeSelector;
