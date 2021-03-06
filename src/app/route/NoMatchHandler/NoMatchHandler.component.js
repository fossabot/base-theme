import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoMatch from 'Route/NoMatch';
import { LocationType } from 'Type/Router';

class NoMatchHandler extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        const { location: { pathname: newPathname } } = this.props;
        const { location: { pathname } } = prevProps;

        if (newPathname !== pathname) {
            window.scrollTo(0, 0);
            this.onRouteChanged();
        }
    }

    /**
     * On browser route change
     * @return {void}
     */
    onRouteChanged() {
        const { noMatch, updateNoMatch } = this.props;

        if (noMatch) {
            updateNoMatch({ noMatch: false });
        }
    }

    render() {
        const { children, noMatch } = this.props;

        if (noMatch) {
            return <NoMatch />;
        }

        return (
            <React.Fragment>
                { children }
            </React.Fragment>
        );
    }
}

NoMatchHandler.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    noMatch: PropTypes.bool.isRequired,
    updateNoMatch: PropTypes.func.isRequired,
    location: LocationType.isRequired
};

export default NoMatchHandler;
