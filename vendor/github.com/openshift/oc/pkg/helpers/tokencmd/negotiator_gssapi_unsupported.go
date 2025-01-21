//go:build !gssapi
// +build !gssapi

package tokencmd

func GSSAPIEnabled() bool {
	return false
}

func NewGSSAPINegotiator(string) Negotiator {
	return newUnsupportedNegotiator("GSSAPI")
}
