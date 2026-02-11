# Zero Trust Architecture Demo
![Status](https://img.shields.io/badge/Status-Restricted-red)

## Overview
A demonstration of Zero Trust security principles applied to a microservices architecture. It implements identity-based access control, mutual TLS (mTLS) for service-to-service communication, and continuous authentication policies, ensuring that trust is never assumed regardless of the network location.

## Security Principles
- **Never Trust, Always Verify**: Explicit authentication for every request.
- **Least Privilege Access**: Users and services get only the access they need.
- **Assume Breach**: Constant monitoring and micro-segmentation.
- **mTLS**: Encrypted communication between all internal modules.

## Technical Stack
- **Language**: Go
- **RPC**: gRPC
- **Auth**: IAM / OIDC
