/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2018 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from 'react';

import styled from 'styled-components';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Display from 'web/components/dashboard/display/display';

const removeaction = action('on remove click');

const Div = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
`;

storiesOf('Dashboard/Display', module)
  .add('default', () => {
    return (
      <Div width="500px">
        <Display
          title="Foo Bar"
          onRemoveClick={removeaction}
        >
          <Div
            backgroundColor="blue"
            width="400px"
            height="400px"
          />
        </Display>
      </Div>
    );
  });

// vim: set ts=2 sw=2 tw=80: