---
sidebar_position: 7
---

# `hems`

evcc can be integrated into existing Home Energy Management Systems (HEMS). Currently, the SMA Sunny Home Manager 2.0 (SHM) is supported!

**For example**:

```yaml
hems:
  type: sma
  ...
```

Below, the various parameters are explained.

---

## Required Parameters

### `type`

Defines the HEMS system.

**Possible Values**:

- `sma`: For the SMA Sunny Home Manager 2.0. See [`sma`](#sma)

**For example**:

```yaml
type: sma
```

---

## Optional Parameters

### `allowcontrol`

Defines whether the HEMS defined should take over the charging control of evcc.

**Possible Values**:

- `true`: This allows adjusting the ratio of grid power to PV power for the **Min+PV** mode in the Sunny Portal using the "Optional energy demand" slider. If the required PV power is not available, charging will be interrupted as in the **PV** mode. Sliding the slider all the way to the left makes the **Min+PV** mode work as described. Sliding the slider all the way to the right makes the **Min+PV** mode behave like the **PV** mode.
- `false`: The SHM cannot influence the charging modes; they are controlled only by evcc.

**For example**:

```yaml
hems:
  type: sma
  allowcontrol: false
  ...
```

---

## Optional SMA Parameters

evcc registers each charging point with the SHM as an independent device. The device ID is generated by evcc.

The device ID is a HEX string and is composed as follows

```text
F-AAAAAAAA-BBBBBBBBBBBB-00
```

- F: Vendor ID Type, predefined
- AAAAAAAA: See `vendorid`
- BBBBBBBBBBBB: See `deviceid`
- 00: Sub Device ID, predefined

---

### `vendorid`

Defines the VendorID used for generating the Device ID. If no Vendor ID is specified in the configuration, a predefined ID is used.

HEX string, length 8 characters

**For example**:

```yaml
hems:
  type: sma
  vendorid: AAAAAAAA
  ...
```

---

### `deviceid`

Defines the device ID used for generating the Device ID. If no device ID is specified, evcc generates a random device ID depending on the current computer.

HEX string, length: 12 characters

**For example**:

```yaml
hems:
  type: sma
  deviceid: BBBBBBBBBBBB
  ...
```

:::info Docker Container
If evcc is running as a Docker container, `machine-id` must be mounted. See also [Docker Configuration](../../installation/docker)
:::

#### Determine Previous DeviceID

If evcc is moved to another computer, the randomly generated device ID also changes. In this case, the SHM recognizes evcc as a new device, and the previous devices are not recognized in the SMA Portal.

To prevent this, the device ID from the previous system should be adopted:

- Open the address `http://PREVIOUS-EVCC-HOST-IP-ADDRESS:7070/semp` in a browser.
- XML-formatted text will be displayed. The text starts in this form:

  ```xml
  <Device2EM xmlns="http://www.sma.de/communication/schema/SEMP/v1">
    <DeviceInfo>
      <Identification>
        <DeviceId>F-28081973-BBBBBBBBBBBB-00</DeviceId>
  ```

- The string at the location of `BBBBBBBBBBBB` corresponds to the DeviceID.
- This string must now be used in the configuration for `deviceid` in the new system.

---

## HEMS Supported

### `sma`

Provides support for the SMA Sunny Home Manager 2.0 (SHM).

Through this integration, [chargers](loadpoints) can be added to the SHM and, for example, considered for its control.

**For example**:

```yaml
hems:
  type: sma
  allowcontrol: false # set true to allow SHM controlling charger in PV modes
```