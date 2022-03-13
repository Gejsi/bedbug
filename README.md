<h1 align="center">Bedbug</h1>

<p align="center">Avoid spam, tracking and hacking by generating disposable data.<br />You can even view emails sent to your temporary mailbox.</p>

---

# Usage

Calling `bedbug` prints:

```console
$ bedbug
Usage: bedbug [options] [command]

Options:
  -V, --version             output the version number
  -h, --help                display help for command

Commands:
  generate|g                Generate some throwaway data.
  list|l [options] <email>  Get a list of all messages sent to your temporary email.
  help [command]            display help for command
```

Generate some disposable data.

```console
$ bedbug generate
--------General information--------
First name:	 	 Abbigail
Last name:		 Batz
Email:		 	 abbigail@1secmail.net
Password:	 	 t_imEn4Rs0
Phone number:	 691.349.2228 x1568
--------Address--------
Country:	 	 Puerto Rico
City:			 Lelandview
Street:		 	 94118 Kessler Villages
Zip code:	 	 29754
--------Credit/Debit card--------
Card number:	 6759-5991-7090-0386-674
End date:	 	 3/13/2022
CVV:		 	 163
```

Get a list of all messages sent to your temporary email.

```console
$ bedbug list abbigail@1secmail.net
```

View a specific email chosen by id.

```console
$ bedbug list abbigail@1secmail.net --id 201501
```

View the most recent email sent to your disposable inbox.

```console
$ bedbug list abbigail@1secmail.net --recent
```

> All commands and options have a shorter corresponding alias, e.g. `list = l` and `--recent = -r`
