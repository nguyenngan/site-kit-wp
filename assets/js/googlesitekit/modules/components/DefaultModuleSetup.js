/**
 * DefaultModuleSetup component.
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
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Button from '../../../components/button';

export default function DefaultModuleSetup( { finishSetup, module = {} } ) {
	return (
		<div className={ `googlesitekit-setup-module googlesitekit-setup-module--${ module.slug }` }>
			<h2 className="googlesitekit-heading-3 googlesitekit-setup-module__title">
				{ module.name }
			</h2>
			<form className="googlesitekit-{moduleSlug}-setup__form" onSubmit={ finishSetup }>
				<div className="googlesitekit-setup-module__action">
					<Button>
						{ __( 'Confirm & Continue', 'google-site-kit' ) }
					</Button>
				</div>
			</form>
		</div>
	);
}

DefaultModuleSetup.propTypes = {
	finishSetup: PropTypes.func.isRequired,
	module: PropTypes.shape( {
		name: PropTypes.string,
		slug: PropTypes.string,
	} ),
};
