/* Copyright (C) 2017-2019 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
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

import _ from 'gmp/locale';

import {FoldState} from 'web/components/folding/folding';

import EditIcon from 'web/components/icon/editicon';

import Section from 'web/components/section/section';

import Table from 'web/components/table/stripedtable';
import TableBody from 'web/components/table/body';
import TableData from 'web/components/table/data';
import TableHead from 'web/components/table/head';
import TableHeader from 'web/components/table/header';
import TableRow from 'web/components/table/row';

import PropTypes from 'web/utils/proptypes';

const StyledTableData = styled(TableData)`
  overflow-wrap: break-word;
`;

class NvtPreferenceDisplay extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.preference !== this.props.preference;
  }

  render() {
    const {preference, onEditNvtDetailsClick, title} = this.props;
    return (
      <TableRow>
        <StyledTableData>{preference.nvt.name}</StyledTableData>
        <StyledTableData>{preference.name}</StyledTableData>
        <StyledTableData>{preference.value}</StyledTableData>
        <TableData align={['center', 'center']}>
          <EditIcon
            title={title}
            value={preference.nvt.oid}
            onClick={onEditNvtDetailsClick}
          />
        </TableData>
      </TableRow>
    );
  }
}

NvtPreferenceDisplay.propTypes = {
  preference: PropTypes.shape({
    nvt: PropTypes.shape({
      oid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  onEditNvtDetailsClick: PropTypes.func.isRequired,
};

const NvtPreferences = ({
  editTitle,
  preferences = [],
  onEditNvtDetailsClick,
}) => (
  <Section
    foldable
    initialFoldState={FoldState.FOLDED}
    title={_('Network Vulnerability Test Preferences ({{counts}})', {
      counts: preferences.length,
    })}
  >
    <Table fixed>
      <TableHeader>
        <TableRow>
          <TableHead width="30%">{_('NVT')}</TableHead>
          <TableHead width="30%">{_('Name')}</TableHead>
          <TableHead width="30%">{_('Value')}</TableHead>
          <TableHead width="10%" align="center">
            {_('Actions')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {preferences.map(pref => (
          <NvtPreferenceDisplay
            key={pref.nvt.name + pref.name}
            title={editTitle}
            preference={pref}
            onEditNvtDetailsClick={onEditNvtDetailsClick}
          />
        ))}
      </TableBody>
    </Table>
  </Section>
);

NvtPreferences.propTypes = {
  editTitle: PropTypes.string,
  preferences: PropTypes.array.isRequired,
  onEditNvtDetailsClick: PropTypes.func.isRequired,
};

export default NvtPreferences;
