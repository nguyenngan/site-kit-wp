/**
 * AcquisitionPieChart component.
 *
 * Site Kit by Google, Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * WordPress dependencies
 */
import { createInterpolateElement } from '@wordpress/element';
import { __, _x, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import GoogleChart from '../../../../components/google-chart';
import Link from '../../../../components/link';
import { getSiteKitAdminURL } from '../../../../util';
import { extractAnalyticsDataForTrafficChart } from '../../util';

const GOOGLE_CHART_PIE_SETTINGS = {
	chartArea: {
		width: '100%',
		height: '100%',
	},
	backgroundColor: 'transparent',
	height: 250,
	legend: {
		alignment: 'center',
		textStyle: {
			color: '#5b5b61',
			fontSize: 12,
		},
	},
	slices: {
		0: { color: '#178EC5' },
		1: { color: '#54B23B' },
		2: { color: '#EB5729' },
		3: { color: '#ECED33' },
		4: { color: '#34CBE3' },
		5: { color: '#82E88E' },
	},
	title: null,
	width: '100%',
};

function AcquisitionPieChart( { data, args, source } ) {
	if ( ! data ) {
		return null;
	}

	return (
		<div className="googlesitekit-chart googlesitekit-chart--pie">
			<GoogleChart
				data={ extractAnalyticsDataForTrafficChart( data, args.url ? 1 : 0 ) }
				options={ GOOGLE_CHART_PIE_SETTINGS }
				chartType="pie"
				id="overview-piechart"
				loadHeight={ 205 }
			/>

			{ source &&
				<div className="googlesitekit-chart__source">
					{ createInterpolateElement(
						sprintf(
							/* translators: %s: source link */
							__( 'Source: %s', 'google-site-kit' ),
							`<a>${ _x( 'Analytics', 'Service name', 'google-site-kit' ) }</a>`
						),
						{
							a: <Link
								key="link"
								href={ getSiteKitAdminURL( 'googlesitekit-module-analytics' ) }
								inherit
							/>,
						}
					) }
				</div>
			}
		</div>
	);
}

AcquisitionPieChart.propTypes = {
	data: PropTypes.arrayOf( PropTypes.object ),
	args: PropTypes.shape( { url: PropTypes.string } ).isRequired,
	source: PropTypes.bool,
};

AcquisitionPieChart.defaultProps = {
	source: false,
};

export default AcquisitionPieChart;
