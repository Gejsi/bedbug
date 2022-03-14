<h1 align="center">Bedworm</h1>
<p align="center">
 <img src="./logo.svg" alt="logo" />
</p>
<p align="center">Avoid spam, tracking and hacking by generating disposable data.<br />You can even view emails sent to your temporary mailbox.</p>

---

# Usage

Calling `bedworm` prints:

```console
$ bedworm
Usage: bedworm [options] [command]

Options:
  -V, --version             output the version number
  -h, --help                display help for command

Commands:
  generate|g                Generate some throwaway data.
  list|l [options] <email>  Get a list of all messages sent to your temporary email.
  help [command]            display help for command
```

> All commands and options have a shorter corresponding alias, e.g. `list = l` and `--recent = -r`

## `bedworm generate`

Generate some disposable data.

```console
$ bedworm generate
--------General information--------
First name:	 Dilip
Last name:	 Salazar
Email:		 dilip@1secmail.com
Password:	 xpMYlRR6D3
Phone number:	 +39(021)37 504
--------Address--------
Country:	 Lao Peoples Democratic Republic
City:		 Rogers
Street:		 1035 Kuphal Mountain
Zip code:	 69603-6997
--------Credit/Debit card--------
Card number:	 4716461751210734
End date:	 08/22
CVV:		 994
Card type:	 VISA
```

Generated credit card numbers passed the **_Luhn check_**, however they may not work.<br /> You can try to generate some new data, but don't expect anything magical from a random credit card generator.

## `bedworm list`

Get a list of all messages sent to your temporary email.

```console
$ bedworm list abbigail@1secmail.net
```

View a specific email chosen by id.

```console
$ bedworm list abbigail@1secmail.net --id 201501
```

View the most recent email sent to your disposable inbox.

```console
$ bedworm list abbigail@1secmail.net --recent
```
